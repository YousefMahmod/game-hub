import useData from "./useData";

//use custom hook to seperate logic
export interface Genre {
    id: number;
    name: string;
}
  
export const useGenres = () => useData<Genre>("/genres");