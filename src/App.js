import './App.css';
import React from 'react'
import {BrouserRoute as Router,Route,Routes} from 'react-dom'
import Home from "./Pages/Home/HomeScreen";

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
