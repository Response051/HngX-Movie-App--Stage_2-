import { useState } from "react";

const MoviePageLists = ({ movieList }) => {
    
  const MapMovie = movieList.map((movie, id) => {
    return (
      <div key={id} className="" data-testid="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `}
          data-testid="movie-poster"
        />
        ;<li data-testid="movie-title"> {movie.title}</li>
        <li data-testid="movie-release-date">{movie.release_date}</li>
        <div>
          <button className="border bg-orange-500 px-4 text-black">IMdb</button>
          <span className="ml-2">860/100</span>
        </div>
      </div>
    );
  });

  return <ul>{MapMovie}</ul>;
};

export default MoviePageLists;
