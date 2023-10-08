import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

//use custom hook to seperate logic

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

export const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>("/games", {params: {genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id}}, [selectedGenre, selectedPlatform]);