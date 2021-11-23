import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../components/logo/Logo';
import Dashboard from '../../components/dashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
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
    <div className="header">
      <Logo />
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
      <Dashboard />
    </div>
  )
};



export default Header;