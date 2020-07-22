import React from "react";
import PropTypes from "prop-types";

const User = ({ user }) => {
  const { login, avatar_url, html_url } = user;

  return (
    <li className="card text-center">
      <img
        src={avatar_url}
        alt="profile pic"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </li>
  );
};
User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
