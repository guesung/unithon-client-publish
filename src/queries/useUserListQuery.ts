import { useQuery } from "react-query";
import querykeys from "./queryKeys";
import { Order, Position, Profile } from "@/types/profile";
import httpClient from "@/services/httpClient";

const fetch = async (position: Position, order: Order) => {
  const { data } = await httpClient.get<Profile[]>("/users", { params: { position, orderType: order } });
  return data;
};

const useUserListQuery = (position: Position, order: Order) => {
  return useQuery(querykeys.userList, () => fetch(position, order), {});
};

export default useUserListQuery;
