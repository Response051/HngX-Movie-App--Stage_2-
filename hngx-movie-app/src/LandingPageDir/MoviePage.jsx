import { useEffect, useState } from "react";
import MoviePageLists from "./MoviePageLists";

function MoviePage() {
  const [movieList, setmovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=19849da4386163308051a073ae1f3c8c"
    )
      .then((res) => res.json())
      .then((json) => setmovieList(json.results))
      .catch((error) => {
        console.error(`there was an API failure ${error}`);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  //   console.log(movieList);

  return (
    <>
      <MoviePageLists movieList={movieList} />
    </>
  );
}

export default MoviePage;
