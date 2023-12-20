import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c6d06dbed1414ae4bd49aaf88b576985",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (requestConfig?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, {
        ...requestConfig,
      })
      .then((res) => res.data);
  };
  getGame = (id: string | number) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
  getGameTrailers = () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };
}

export default ApiClient;
