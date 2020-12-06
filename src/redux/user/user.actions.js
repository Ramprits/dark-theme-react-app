import { SET_USER, USER_ERROR, USER_SIGN_OUT } from "./user.types";

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const userError = (payload) => ({
  type: USER_ERROR,
  payload,
});

export const userSignOut = () => ({
  type: USER_SIGN_OUT,
});
