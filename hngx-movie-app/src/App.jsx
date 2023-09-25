
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPageDir/LandindPage";
import MovieDir from "./moviePageDir/MovieDir";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage  />} />
        <Route path="movieDirPage" element={<MovieDir />} />

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
