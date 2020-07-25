import React, { Fragment, useContext, useEffect } from "react";
import GithubContext from "../../contexts/github/githubContext";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";

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
    bio,
    login,
    avatar_url,
    html_url,
    location,
    blog,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) return <Spinner />;
  return (
    <div className="my-4">
      {/* <----- Go Back -----> */}
      <Link to="/" className="btn btn-primary mr-2 mb-2">
        <i className="fas fa-arrow-left" />
      </Link>
      {/* <----- Is hireable -----> */}
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <a href={html_url} className="btn btn-dark my-1 float-right">
        <i className="fab fa-github" />
      </a>
      {/* <----- User -----> */}
      <div className="container card py-2">
        <div className="row">
          {/* <----- Profile Pic, Name, Location -----> */}
          <div className="col-6">
            <img
              src={avatar_url}
              className="rounded-lg"
              alt=""
              style={{ width: "150px" }}
            />
            <h1 className="my-1">{name}</h1>
            {location && <p>Location: {location}</p>}
          </div>
          <div className="col-6">
            {bio && (
              <Fragment>
                <h4 className="my-2">Bio</h4>
                <p>{bio}</p>
              </Fragment>
            )}
            <ul className="list-group">
              {login && (
                <li className="list-group-item">
                  <strong>Username: </strong> {login}
                </li>
              )}

              {company && (
                <li className="list-group-item">
                  <strong>Company: </strong> {company}
                </li>
              )}
              {blog && (
                <li className="list-group-item mb-3">
                  <strong>Website: </strong>
                  <a href={blog}>{blog}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* <----- Social -----> */}
        <div className="text-center my-2 mb-2 container">
          <div className="row">
            <div className="followers col-4 col-md-3 bg-primary text-light">
              Followers: {followers}
            </div>
            <div className="following col-4 col-md-3 bg-success text-light">
              Following: {following}
            </div>
            <div className="public-repos col-4 col-md-3 bg-secondary text-light">
              Public Repos: {public_repos}
            </div>
            <div className="public-gists col-12 col-md-3 bg-dark text-light">
              Public Gists: {public_gists}
            </div>
          </div>
        </div>
        <Repos repos={repos} />
      </div>
    </div>
  );
};

export default User;
