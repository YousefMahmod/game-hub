import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

//use custom hook to seperate logic
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
}

export const useGames = (gameQuery: GameQuery) => useData<Game>("/games", {params: {
    genres: gameQuery.genre?.id, 
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText
}}, [gameQuery]);