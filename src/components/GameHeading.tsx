import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQuerySotre from "../store";

const GameHeading = () => {
  const platformId = useGameQuerySotre((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const genreId = useGameQuerySotre((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
