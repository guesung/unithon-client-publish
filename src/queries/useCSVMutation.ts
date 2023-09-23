import { useMutation } from "react-query";
import { Profile } from "@/types/profile";
import httpClient from "@/services/httClient";
import { CSVForm } from "@/types/csv";

const fetch = async (params: CSVForm) => {
  const { data } = await httpClient.post("/users/csv", params);
  return data;
};

const useCSVMutation = () => {
  return useMutation({ mutationFn: fetch });
};

export default useCSVMutation;
