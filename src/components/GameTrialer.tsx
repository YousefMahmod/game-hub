import useTrailers from "../hooks/useTrailers";

interface Props {
  trailerId: number;
}
const GameTrialer = ({ trailerId }: Props) => {
  const { data: trailer, error, isLoading } = useTrailers(trailerId);
  if (isLoading) return null;
  if (error) throw error;
  const trailers = trailer?.results;
  return trailers ? (
    <video poster={trailers[0].preview} src={trailers[0].data[480]} controls />
  ) : null;
};

export default GameTrialer;
