import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";
import ms from "ms";
export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
export const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"), // 24h
    initialData: platforms,
  });
};
