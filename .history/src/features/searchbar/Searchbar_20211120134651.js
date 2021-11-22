import React from 'react';
import './Searchbar.css';
import SearchIcon from '@mui/icons-material/Search';


const Searchbar = () => {
    return (
        <div className="searchbar">
            <input id="searchbar" placeholder="Search" />
            <label htmlFor="searchbar">
                <SearchIcon /></label>
        </div>
    )
}

export default Searchbar;