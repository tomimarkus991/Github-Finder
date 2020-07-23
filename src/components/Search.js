import React, { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";

const Search = () => {
  const { searchValue, handleSearch, setSearchValue } = useContext(
    UsersContext
  );
  return (
    <div className="my-4">
      <h2>Find people</h2>
      <form
        className="input-group"
        style={{ width: "350px" }}
        onSubmit={(e) => handleSearch(e)}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Username"
          required
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="btn btn-primary input-group-append">Search</button>
      </form>
    </div>
  );
};

export default Search;
