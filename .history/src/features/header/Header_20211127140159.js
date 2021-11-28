import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../components/logo/Logo';
import Dashboard from '../../components/dashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';
import SearchIcon from '@mui/icons-material/Search';
import Logout from "../logout/Logout";
import { selectUser } from '../../store/userSlice';


const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('');

  const searchTerm = useSelector((state) => state.reddit.searchTerm);

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [dispatch, searchTerm]);

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
      </form>
      <div>
        {user ? <Logout /> : <Dashboard />}
      </div>
    </div>

  )
};



export default Header;