import React, {useState, useEffect} from "react";
import Movie from "./Movie";
import Search from "./Search";

const apiHost = "http://localhost:9292/movies"

function MovieContainer() {

    const [movieData, setMovieData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(apiHost)
          .then((res) => res.json())
          .then((movieData) => {
           setMovieData(movieData)
          })
      }, []);

      const searchMovie = (e) => {
        setSearch(e.target.value);
      }
return (
    <>
    <Search search={search} onSearchChange={searchMovie} />
    <br></br>
    <div className="movie-container">
      {movieData.filter((movie)=>{
          if(search === ""){
            return movie;
          }else if(movie.name.toLowerCase().includes(search.toLowerCase())){
            return movie;
          }
          return false
        })?.map((displayMovieItem) => (
          <Movie key={displayMovieItem.id}  displayMovieItems={displayMovieItem} movieData={movieData} movie={Movie} setMovieData={setMovieData} />
        ))}
      </div>
 </>

)
}

export default MovieContainer
