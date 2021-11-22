import React, { useState, useEffect } from 'react';
import './Searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

const Searchbar = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();
    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };
    return (
        <form className="searchbar" onSubmit={onSearchTermSubmit}>
            <input
                type="text"
                placeholder="Search"
                value={searchTermLocal}
                onChange={onSearchTermChange}
                aria-label="Search posts"
            />
            <button id="btn" type="submit" onClick={onSearchTermSubmit} aria-label="Search">
                <SearchIcon />
            </button>

        </form>)
}

export default Searchbar;