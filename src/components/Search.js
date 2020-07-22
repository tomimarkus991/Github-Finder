import React, {useContext} from 'react';
import { UsersContext } from "../contexts/UsersContext";


const Search = () => {
    const {searchValue,handleSearch, setSearchValue} = useContext(UsersContext);
    return (
        <div>
            <h2>Search</h2>
            <form onSubmit={(e) => handleSearch(e)}>
            <input type="text" placeholder="Username" required value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button>Search</button>
            </form>
        </div>
    );
};




export default Search;
