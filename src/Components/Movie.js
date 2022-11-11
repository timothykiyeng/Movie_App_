import React from "react";
function Movie({ displayMovieItems }) {

  return (
    <>
      <div className="movie">
        <img src={displayMovieItems.image_url} alt="" />
        <div className="movie-info">
          <h3>{displayMovieItems.name}</h3>
          <span>Rating: {displayMovieItems.rating}</span>
        </div>
        <div className="movie-overview">
          <h2>Overview:</h2>
          <p>{displayMovieItems.overview}</p>
        </div>
      </div>
    </>
  );
}
export default Movie;
