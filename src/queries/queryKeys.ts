import { Order, Position } from "@/types/profile";

export enum QUERY_KEY_NAMESPACE {
  LOGIN = "login",
  USER_LIST = "userList",
}

const QUERY_KEY = {
  login: [QUERY_KEY_NAMESPACE.LOGIN],
  userList: (position: Position, order: Order) => [QUERY_KEY_NAMESPACE.USER_LIST, position, order],
};

export default QUERY_KEY;
