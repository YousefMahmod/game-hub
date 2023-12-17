import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children?: string;
}

const ExpandableText = ({ children }: Props) => {
  const [exapanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  return (
    <Text>
      {exapanded ? children : children.substring(0, limit) + "..."}
      {children.length > limit && (
        <Button
          colorScheme="yellow"
          onClick={() => setExpanded(!exapanded)}
          ml={1}
          size="xs"
          fontWeight="bold"
        >
          {exapanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </Text>
  );
};

export default ExpandableText;
