import { useQuery } from "react-query";
import queryKeys from "./queryKeys";
import axios from "axios";
import { ProfileForm } from "@/types/profile";
import { queryClient } from "@/pages/_app";

const fetch = async (phoneNumber: string) => {
  const { data } = await axios.get<ProfileForm>("/users/user", { params: { phoneNumber } });
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
