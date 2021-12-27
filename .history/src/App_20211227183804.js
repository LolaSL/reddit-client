import React from 'react';
import Header from './features/header/Header';
import './App.css';
import Home from './features/home/Home';
import Subreddits from './features/subreddits/Subreddits';


function App() {

  return (
    <div data-test="appRoot">
      <Header data-test="appHeader" />
      <main>
        <Home data-test="post" />
      </main>
      <aside>
        <Subreddits data-test="subreddits" />
      </aside>
    </div>

  );
}

export default App;
