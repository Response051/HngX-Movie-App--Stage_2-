import { useState } from "react";
import MoviePageLists from "./MoviePageLists";

const Search = () => {
    const [search, setSearch] = useState("")
    
  return (
    <>
      <MoviePageLists open={open} Toggle={Toggle} />
    </>
  );
};

export default Search;
