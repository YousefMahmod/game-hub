import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrialer = ({ gameId }: Props) => {
  const { data: trailer, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const trailers = trailer?.results;
  return trailers ? (
    <video poster={trailers[0].preview} src={trailers[0].data[480]} controls />
  ) : null;
};

export default GameTrialer;
