import {
  SEARCH_USERS,
  SET_LOADING,
  SET_SEARCHING,
  GET_USER,
  GET_REPOS,
  GET_RANDOM_USERS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_RANDOM_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_SEARCHING:
      return {
        ...state,
        searching: true,
      };

    default:
      break;
  }
};
