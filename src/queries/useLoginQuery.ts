import { useQuery } from "react-query";
import queryKeys from "./queryKeys";
import { ProfileForm } from "@/types/profile";
import { queryClient } from "@/pages/_app";
import httpClient from "@/services/httpClient";

const fetch = async (phoneNumber: string) => {
  const { data } = await httpClient.get<ProfileForm>("/users/info", { params: { phoneNumber } });
  return data;
};

const useLoginQuery = (phoneNumber: string) => {
  return useQuery(queryKeys.login, () => fetch(phoneNumber), {
    enabled: false,
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};

export const getLoginQueryData = () => {
  return queryClient.getQueryData<ProfileForm>(queryKeys.login);
};

export default useLoginQuery;
