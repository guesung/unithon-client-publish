import { useMutation } from "react-query";
import { Profile } from "@/types/profile";
import httpClient from "@/services/httClient";

const fetch = async (params: Profile) => {
  const { data } = await httpClient.post("/users/user", params);
  return data;
};

const useProfilMutation = () => {
  return useMutation({ mutationFn: fetch });
};

export default useProfilMutation;
