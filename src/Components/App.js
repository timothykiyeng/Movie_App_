import React from "react";
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"
import Navbar from "./Navbar";
import MovieContainer from "./MovieContainer";
import WatchList from "./WatchList";

const apiHost = "http://localhost:9292/watchlists"
const [watchlistData, setWatchlistData] = useState([])


function App() {
    useEffect(()=> {
      fetch(apiHost)
      .then((res) => res.json())
      .then((data) => {
       setWatchlistData(data)
      })
    }, [])


  return (
    <div className="ui raised segment">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieContainer />} />
        <Route path="/watchlist" element={<WatchList watchlistData={watchlistData} setWatchlistData={setWatchlistData}/>} />
      </Routes>
    </div>
  );
}

export default App;
