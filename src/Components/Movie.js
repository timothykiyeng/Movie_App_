import React from "react";
function Movie({ displayMovieItems, setMovieData }) {

  function handleDelete (){
    fetch(`http://localhost:9292/movie/${displayMovieItems.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setMovieData((movie) => movie.filter((mov) => mov.id !== displayMovieItems.id));
          alert("Movie Deleted!");
        });
  }

  return (
    <>
      <div className="movie" onClick={handleDelete}>
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
