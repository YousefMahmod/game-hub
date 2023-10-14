import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";
export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export const usePlatforms = () => {
  const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms,
  });
};
