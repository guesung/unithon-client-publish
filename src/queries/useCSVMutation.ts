import httpClient from "@/services/httpClient";
import { useMutation } from "react-query";

const fetch = async (params: FormData) => {
  const { data } = await httpClient.post("/users/csv", params, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

const useCSVMutation = () => {
  return useMutation({ mutationFn: fetch });
};

export default useCSVMutation;
