import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import imageLogo from "../assets/Logo.png";
import Menu from "../assets/Menu.png";

import MoviePageLists from "./MoviePageLists";
import LandingBannerMainPage from "./landingBannerMainPage";

function LandingNavBar() {
  const [movieList, setmovieList] = useState([]);
  const [search, setSearch] = useState("");

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
  return (
    <>
      <section
        className="flex py-2 flex-col items-center justify-center 
        md:flex-row md:justify-evenly bg-slate-400 md:py-6 "
      >
        <div className=" my-4 md:my-0">
          <img src={imageLogo} alt="MovieBoxLogo" />
        </div>

        <div className="relative">
          <span className="md:absolute top-2 bottom-4 w-6 h-6 my-auto text-gray-400 right-2">
            {" "}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <form>
            <input
              className="md:w-full md:py-2 px-20 md:px-2 lg:px-16  text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 "
              type="text"
              placeholder="What do you want to watch"
              name="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </form>
        </div>

        <div className="lg:flex lg:relative hidden">
          <p className="text-2xl font-sans tracking-normal font-medium ">
            Sign In
          </p>
          <img src={Menu} alt="Menu" className=" lg:absolute lg:left-28" />
        </div>
      </section>
      <LandingBannerMainPage movieList={movieList} />
      <div className="mt-40">
        <MoviePageLists movieList={movieList} search={search} />
      </div>
    </>
  );
}

export default LandingNavBar;
