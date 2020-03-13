import React, { useState, useEffect }  from 'react';
import ReactDOM from "react-dom";
// import axios from "axios";
import './App.css';

import PlayerCard from './components/PlayerCard.js';
import PlayerCardList from './components/PlayerCardList.js';
import Navbar from "./components/NavBar.js";

const App()=> {
  return (
    <div className="App">
      <Navbar />
      <PlayerCard/>
      <PlayerCardList />
    </div>
  );
}

export default App;