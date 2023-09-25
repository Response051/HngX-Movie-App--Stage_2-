import { useState } from "react";

const MoviePageLists = ({ movieList, search }) => {
  // this toggle is meant for showing or hidding the description of the rendered movie
  const [Toggle, setToggle] = useState(true);
  const open = () => {
    setToggle(!Toggle);
  };

  // the filter section(based on the title)
  const Filter = movieList.filter((filtered) => {
    return search.toLowerCase() === ""
      ? filtered
      : filtered.title.toLowerCase().includes(search);
  });

  const MapMovie = Filter.map((movie, id) => {
    return (
      <>
        <div className="mt-6">
          <div key={id} className="" data-testid="movie-card">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `}
                data-testid="movie-poster"
                className="w-3/12 h-1/4 rounded-md"
              />
              <ul className="flex justify-between my-6">
                <li
                  data-testid="movie-title"
                  className="text-2xl text-gray-900 text-left font-mono font-bold"
                >
                  {" "}
                  {movie.title}
                </li>
                <li data-testid="movie-release-date">{movie.release_date}</li>
              </ul>
              <div className="flex justify-between my-6">
                <button className="border bg-orange-500 px-4 rounded text-black font-sans text-base">
                  IMdb
                </button>
                <span>860/100</span>
              </div>
              {Toggle ? (
                <p>{movie.overview} </p>
              ) : (
                <p>{movie.overview.substring(0, 69)}.... </p>
              )}
              <button
                onClick={open}
                className="bg-blue-500 p-2 text-yellow-100 text-sm rounded font-serif my-4"
              >
                {Toggle ? "ShowLess..." : "ShowMore..."}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });

  return <ul>{MapMovie}</ul>;
};

export default MoviePageLists;
