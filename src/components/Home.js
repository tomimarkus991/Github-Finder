import React from "react";
import UsersContextProvider from "../contexts/UsersContext";
import Users from "./Users";
import Search from "./Search";

const Home = () => {
  return (
    <div className="container">
      <UsersContextProvider>
        <Search />
        <Users />
      </UsersContextProvider>
    </div>
  );
};

export default Home;
