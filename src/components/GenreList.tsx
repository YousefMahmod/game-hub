import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";
interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId?: number;
}

const GenreList = ({
  onSelectGenre,
  selectedGenreId: selectedGenre,
}: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  if (error) return null;
  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <ListItem key={skeleton} paddingY="5px">
              <Skeleton height="20px" />
            </ListItem>
          ))}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="36px"
                borderRadius="8px"
                src={getCroppedImage(genre.image_background)}
                objectFit="cover"
              />
              <Button
                fontWeight={genre.id === selectedGenre ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre.id)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
