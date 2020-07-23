import React from "react";
import PropTypes from "prop-types";

const User = ({ user }) => {
  const { login, avatar_url, html_url } = user;

  return (
    <li className="card text-center">
      <img
        src={avatar_url}
        alt="profile pic"
        className="rounded-circle w-50 d-block m-auto py-2"
      />
      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark">
        More
      </a>
    </li>
  );
};
User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
