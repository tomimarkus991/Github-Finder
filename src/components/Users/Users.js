import React, { useContext } from "react";
import GithubContext from "../../contexts/github/githubContext";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = () => {
  const { users, loading, searching } = useContext(GithubContext);
  const userStyle = "col-5 col-md-4 my-2";
  if (loading === true) {
    return <Spinner />;
  } else if (searching === true) {
    return (
      <ul className="row">
        {users.map((user) => {
          const { id } = user;
          return (
            <div key={id} className={userStyle}>
              <UserItem user={user} />
            </div>
          );
        })}
      </ul>
    );
  } else if (loading === false) {
    return (
      <ul className="row">
        {users.map((user) => {
          const { id } = user;
          return (
            <div key={id} className={userStyle}>
              <UserItem user={user} />
            </div>
          );
        })}
      </ul>
    );
  }
};

export default Users;
