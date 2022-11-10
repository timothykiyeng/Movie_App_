import React from "react";



    function WatchList({ watchlistData, setWatchlistData }) {
        function handleDelete() {
          fetch(`http://localhost:9292/watchlist/${watchlistData.id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then(() => {
              setWatchlistData((movie) =>
                movie.filter((watchlist) => watchlist.id !== watchlistData.id)
              );
              alert("Movie Deleted!");
            });
        }
        return (
          <>
            <div className="movie" onClick={handleDelete}>
              <img src={watchlistData.image_url} alt="" />
              <div className="movie-info">
                <h3>{watchlistData.name}</h3>
              </div>
              <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{watchlistData.viewer_id}</p>
                <p>{watchlistData.movie_id}</p>
              </div>
            </div>
          </>
        );
      }

export default WatchList;
