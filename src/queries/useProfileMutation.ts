import { useMutation } from "react-query";
import { Profile } from "@/types/profile";
import httpClient from "@/services/httpClient";

const fetch = async (params: Profile & { phoneNumber: string }) => {
  const { data } = await httpClient.post("/users", params);
  return data;
};

const useProfilMutation = () => {
  return useMutation({ mutationFn: fetch });
};

export default useProfilMutation;
