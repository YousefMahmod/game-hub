import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

//use custom hook to seperate logic
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenres = () => {
  const apiClient = new ApiClient<Genre>("/genres");
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"), // 24h
    initialData: genres,
  });
};
