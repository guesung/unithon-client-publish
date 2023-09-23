import { useQuery } from "react-query";
import queryKeys from "./queryKeys";
import axios from "axios";
import { ProfileForm } from "@/types/profile";

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

export default useLoginQuery;
