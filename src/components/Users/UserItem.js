import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;
  return (
    <li className="user-item card text-center">
      <img
        src={avatar_url}
        alt="profile pic"
        className="profile-pic rounded-circle d-block m-auto py-2"
      />
      <h3 className="profile-name mx-2">{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark">
        User Profile
      </Link>
    </li>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
