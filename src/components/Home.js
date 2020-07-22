import React from "react";
import UsersContextProvider from "../contexts/UsersContext";
import Users from "./Users";

const Home = () => {
  return (
    <div className="container">
      <UsersContextProvider>
        <Users />
      </UsersContextProvider>
    </div>
  );
};

export default Home;
