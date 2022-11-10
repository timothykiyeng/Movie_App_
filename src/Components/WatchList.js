import React from "react";
import AddMovie from "./AddMovie";

function WatchList({ watchlistData, postMovies, setWatchListData }) {
  // const [updatedWatchList, setUpdatedWatchList] = useState([watchlistData])
  // console.log(updatedWatchList)

  function handleDelete() {
    fetch(`http://localhost:9292/watchlist/${watchlistData.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setWatchListData((watchlistData) =>
          watchlistData.filter((watchlist) => watchlist.id !== watchlistData.id)
        );
        alert("Movie Deleted!");
      });
  }


  return (
    <>
    <AddMovie postMovies={postMovies}/>
    <br></br>
    <div className="movie-one" onClick={handleDelete}>
      {watchlistData.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={movie.image_url} alt="" />
          <div className="movie-info">
            <h3>{movie.name}</h3>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default WatchList;
