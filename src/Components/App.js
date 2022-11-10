import React from "react";
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"
import Navbar from "./Navbar";
import MovieContainer from "./MovieContainer";


const []
function App() {
  return (
    <div className="ui raised segment">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieContainer />} />
      </Routes>
    </div>
  );
}

export default App;
