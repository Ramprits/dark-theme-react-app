import { SET_USER, USER_ERROR } from "./user.types";

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const userError = (payload) => ({
  type: USER_ERROR,
  payload,
});
