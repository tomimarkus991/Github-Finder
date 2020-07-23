import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);

  const getData = async () => {
    const rndIdSince = Math.floor(Math.random() * 68610000);
    setIsSearching(false);
    setIsLoading(true);
    const res = await axios.get(
      `https://api.github.com/users?since=${rndIdSince}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data);
    setIsLoading(false);
    console.log("i have been called");
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSearching(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchValue}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setSearchedUsers(res.data.items);
    setSearchValue("");
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        searchedUsers,
        isLoading,
        isSearching,
        searchValue,
        setSearchValue,
        handleSearch,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
