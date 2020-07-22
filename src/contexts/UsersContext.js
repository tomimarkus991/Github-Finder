import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const rndIdSince = Math.floor(Math.random() * 68610000);
    console.log(rndIdSince);
    setIsLoading(true);
    const res = await axios.get(
      `https://api.github.com/users?since=${rndIdSince}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data);
    setUsers(res.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <UsersContext.Provider value={{ users, isLoading }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
