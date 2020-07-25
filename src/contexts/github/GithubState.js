import React, { useEffect, useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  SET_SEARCHING,
  GET_USER,
  GET_REPOS,
  GET_RANDOM_USERS,
  GET_NUMBER_OF_STARS,
} from "../types";

const GithubState = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    stars: null,
    loading: false,
    searching: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const { users, user, repos, stars, loading, searching } = state;

  const secrets = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

  // Search Users
  const searchUsers = async (searchUsername) => {
    setLoading();
    setSearching();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchUsername}&${secrets}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  // Get User
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?${secrets}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  // Get Users
  const getRandomUsers = async () => {
    const rndIdSince = Math.floor(Math.random() * 68610000);
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users?since=${rndIdSince}&${secrets}`
    );
    dispatch({ type: GET_RANDOM_USERS, payload: res.data });
  };

  // Get Repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?${secrets}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };
  // Get Stars
  const getStars = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/starred?${secrets}`
    );
    dispatch({ type: GET_NUMBER_OF_STARS, payload: res.data.length });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set Searching
  const setSearching = () => dispatch({ type: SET_SEARCHING });

  useEffect(() => {
    getRandomUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GithubContext.Provider
      value={{
        users,
        user,
        repos,
        stars,
        loading,
        searching,
        searchUsers,
        getUser,
        getUserRepos,
        getStars,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubState;
