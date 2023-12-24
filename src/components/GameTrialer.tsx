import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrialer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;

  const trailer = data?.results[0];
  return trailer ? (
    <video poster={trailer.preview} src={trailer.data[480]} controls />
  ) : null;
};

export default GameTrialer;
