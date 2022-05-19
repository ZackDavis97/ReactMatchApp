import './App.css';
import React from 'react';
import Home from './Home';
import Liked from './Liked';
import { Route } from "react-router-dom";
import NavBar from "./NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Liked" component={Liked} />
    </div>
  );
}

export default App;
