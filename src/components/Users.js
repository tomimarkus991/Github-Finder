import React, { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";
import User from "./User";
import Spinner from "./layout/Spinner";

const Users = () => {
  const { users, isLoading } = useContext(UsersContext);
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <ul style={userStyle}>
      {users.map((user) => {
        const { id } = user;
        return <User key={id} user={user} />;
      })}
    </ul>
  );
};

export default Users;
