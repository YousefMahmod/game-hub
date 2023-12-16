import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";
import { Game } from "./useGames";

//use custom hook to seperate logic
const apiClient = new ApiClient<Game>("/games");

export const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.getGame(slug),
    staleTime: ms("24h"), // 24h
  });
};
