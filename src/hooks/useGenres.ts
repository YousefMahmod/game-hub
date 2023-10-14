import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import genres from "../data/genres";

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
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, next: null, results: genres },
  });
};
