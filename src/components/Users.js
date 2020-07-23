import React, { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";
import User from "./User";
import Spinner from "./layout/Spinner";

const Users = () => {
  const { users, searchedUsers, isLoading, isSearching } = useContext(
    UsersContext
  );

  const userStyle = "col-5 col-md-4 my-2";

  if (isLoading === true) {
    return <Spinner />;
  } else if (isSearching === true) {
    return (
      <ul className="row">
        {searchedUsers.map((user) => {
          const { id } = user;
          return (
            <div className={userStyle}>
              <User key={id} user={user} />
            </div>
          );
        })}
      </ul>
    );
  } else if (isLoading === false) {
    return (
      <ul className="row">
        {users.map((user) => {
          const { id } = user;
          return (
            <div className={userStyle}>
              <User key={id} user={user} />
            </div>
          );
        })}
      </ul>
    );
  }
};

export default Users;
