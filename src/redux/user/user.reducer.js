import { SET_USER, USER_ERROR, USER_SIGN_OUT } from "./user.types";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, currentUser: payload };

    case USER_ERROR:
      return { ...state, error: payload, loading: false };

    case USER_SIGN_OUT:
      return { ...state, currentUser: null };

    default:
      return state;
  }
};
