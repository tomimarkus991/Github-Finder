import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return (
    <ul>
      {repos.map((repo) => (
        <div key={repo.id}>
          <RepoItem repo={repo} />
        </div>
      ))}
    </ul>
  );
};
Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
