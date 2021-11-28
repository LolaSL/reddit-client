import React from 'react';
import Header from './features/header/Header';
import './App.css';
import Home from './features/home/Home';
import Subreddits from './features/subreddits/Subreddits';
import Logout from '../../features/logout/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/userSlice';
import Login from '../../features/login/Login';


function App() {
  const user = useSelector(selectUser)

  return (
    <div>{user ? <Logout /> : <Login />}
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </div>

  );
}


export default App;
