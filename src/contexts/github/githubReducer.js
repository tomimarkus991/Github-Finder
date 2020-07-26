import {
  SEARCH_USERS,
  SET_LOADING,
  SET_SEARCHING,
  GET_USER,
  GET_REPOS,
  GET_RANDOM_USERS,
  GET_NUMBER_OF_STARS,
  SET_LOADING_REPOS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING_REPOS:
      return {
        ...state,
        loadingRepos: true,
      };
    case GET_NUMBER_OF_STARS:
      return {
        ...state,
        stars: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loadingRepos: false,
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
