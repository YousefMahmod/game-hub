import useData from "./useData";

export interface Platform {
    id: number;
    slug: string;
    name: string;
}
  
export const usePlatforms = () => useData<Platform>("/platforms/lists/parents");