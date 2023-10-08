import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {CanceledError, AxiosRequestConfig} from "axios";

//use custom hook to seperate logic
  
interface FetchResponse<T> {
    count: number;
    results: T[];
}
function useData<T> (endpoint: string, requestConfig?: AxiosRequestConfig, depens?: any[]) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
    })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false);
    });
    return () => controller.abort();
  }, depens? [...depens]: []);
  return {data, error, isLoading};
}

export default useData;