import React from "react";
import LandindBanner from "./LandingBanner";
import LandingFooter from "./LandingFooter";
import MoviePage from "./MoviePage";
// ImageBitmapRenderingContext;

function LandindPage() {
  return (
    <div>
      <LandindBanner />
      <MoviePage />
      <LandingFooter />
    </div>
  );
}

export default LandindPage;
