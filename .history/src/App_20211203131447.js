import React from 'react';
import Header from './features/header/Header';
import './App.css';
import Home from './features/home/Home';
import Subreddits from './features/subreddits/Subreddits';


function App() {

  return (
    <div>
      <Header />
      <main id="main">
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </div>

  );
}

export default App;
