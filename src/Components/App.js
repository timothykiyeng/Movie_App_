import React from "react";
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react";
import Card from "./Cards"

function App() {

  const apiHost = "http://localhost:9292/watchlists"

const [watchlistData, setWatchlistData] = useState([])
    useEffect(()=> {
      fetch(apiHost)
      .then((res) => res.json())
      .then((data) => {
       setWatchlistData(data)
      })
    }, [])

    function postMovies(watchlistData){
      fetch("http://localhost:9292/watchlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(watchlistData)
      })
      .then(res => res.json())
      .then(newWatchList => setWatchlistData(watchlistData => [...watchlistData, newWatchList]))
    }


  return (
    <div className="ui raised segment">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieContainer />} />
        <Route path="/watchlist" element={<WatchList watchlistData={watchlistData} postMovies={postMovies} setWatchlistData={setWatchlistData}/>} />
      </Routes>
    </div>
  );
}

export default App;
