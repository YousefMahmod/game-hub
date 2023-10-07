import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {CanceledError} from "axios";

//use custom hook to seperate logic

export interface Platform {
    id: number;
    slug: string;
    name: string;
}
export interface Genre {
    id: number;
    name: string;
}
  
interface FetchGenresResponse {
    count: number;
    results: Genre[];
}
export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", {signal: controller.signal})
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
    })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false);
    });
    return () => controller.abort();
  }, []);
  return {genres, error, isLoading};
}