import genres from "../data/genres";

//use custom hook to seperate logic
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
  
export const useGenres = () => ({data: genres, isLoading: false, error: null}) ;