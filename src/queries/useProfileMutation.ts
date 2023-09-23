import axios from "axios";
import { useMutation } from "react-query";
import { Profile } from "@/types/profile";

const fetch = async (params: Profile) => {
  const { data } = await axios.post("/users/user", params);
  return data;
};

const useProfilMutation = () => {
  return useMutation({ mutationFn: fetch });
};

export default useProfilMutation;
