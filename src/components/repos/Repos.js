import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return (
    <div>
      {repos.length ? <h1 className="text-center">Repos</h1> : ""}
      <ul className="row text-center mr-4">
        {repos.map((repo) => (
          <div className="col-6 col-md-4 my-2" key={repo.id}>
            <RepoItem repo={repo} />
          </div>
        ))}
      </ul>
    </div>
  );
};
Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
