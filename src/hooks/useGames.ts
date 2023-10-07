import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {CanceledError} from "axios";

//use custom hook to seperate logic
export interface Game {
    id: number;
    name: string;
    background_image: string;
}
  
interface FetchGamesResponse {
    count: number;
    results: Game[];
}
export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
    });
    return () => controller.abort();
  }, []);
  return {games, error};
}