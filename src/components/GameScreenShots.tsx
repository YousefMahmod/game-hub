import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
  gameName: string;
}
const GameScreenShots = ({ gameId, gameName }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);
  const screenShots = data?.results;
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid mt={3} columns={{ base: 1, md: 2 }} spacing={3}>
      {screenShots?.map((screenShot) => (
        <Image key={screenShot.id} src={screenShot.image} alt={gameName} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
