import React, { useState, useContext } from "react";
import GithubContext from "../../contexts/github/githubContext";

const Search = () => {
  const { searchUsers } = useContext(GithubContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
    setText("");
  };
  return (
    <div className="my-4">
      <h2>Find people</h2>
      <form
        className="input-group"
        style={{ width: "350px" }}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="text"
          className="form-control"
          placeholder="Username"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary input-group-append"
        />
      </form>
    </div>
  );
};

export default Search;
