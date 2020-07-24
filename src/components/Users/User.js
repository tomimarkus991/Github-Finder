import React, { Fragment, useContext, useEffect } from "react";
import GithubContext from "../../contexts/github/githubContext";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

const User = ({ match }) => {
  const { getUser, loading, user, repos, getUserRepos } = useContext(
    GithubContext
  );

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) return <Spinner />;
  return (
    <div>
      <span>{name}</span>
      <span>{bio}</span>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
