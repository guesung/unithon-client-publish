import httpClient from "@/services/httpClient";
import querykeys from "./queryKeys";
import { QueryKey, QueryOptions, UseQueryOptions, useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

type User = {
  name: string;
  organization: string;
  annual: number;
};

type Response = {
  event: {
    content: string;
  };
  users: User[];
};

const fetch = async () => {
  const { data } = await httpClient.get<Response>("/event");
  return data;
};

const useEventQuery = () => {
  return useQuery(querykeys.event, fetch, { refetchInterval: 1000 * 60 * 60 * 1 });
};

export default useEventQuery;
