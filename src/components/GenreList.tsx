import { HStack, Image, List, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <HStack key={genre.id} paddingY="5px">
          <Image
            boxSize="36px"
            borderRadius="8px"
            src={getCroppedImage(genre.image_background)}
          />
          <Text fontSize="22px">{genre.name}</Text>
        </HStack>
      ))}
    </List>
  );
};

export default GenreList;
