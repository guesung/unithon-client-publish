import { useQuery } from "react-query";
import querykeys from "./queryKeys";
import { Order, Position, Profile } from "@/types/profile";
import httpClient from "@/services/httpClient";

type Response = {
  user_list: Profile[];
};

const fetch = async (position: Position, order: Order) => {
  const { data } = await httpClient.get<Response>("/users", { params: { position, orderType: order } });
  return data;
};

const useUserListQuery = (position: Position, order: Order, enabled = false) => {
  return useQuery(querykeys.userList, () => fetch(position, order), { enabled });
};

export default useUserListQuery;
