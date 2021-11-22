import React from 'react';
import Header from './features/header/Header';
import './App.css';
import Card from './components/card/Card';
import Home from './features/home/Home';

function App() {


  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
      <Card />
    </div >
  );
}

export default App;
