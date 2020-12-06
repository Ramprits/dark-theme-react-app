import { SET_USER, USER_ERROR } from "./user.types";

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

    default:
      return state;
  }
};
