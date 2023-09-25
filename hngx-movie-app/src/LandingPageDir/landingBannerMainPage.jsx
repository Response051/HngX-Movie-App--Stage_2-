import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import image_110 from "../assets/image_110.jpg";

function LandingBannerMainPage() {
  return (
    <>
      <img
        src={image_110}
        className=" absolute opacity-70 md:w-full md:h-5/6 bg-contain"
      />
      <div className="text-left lg:ml-48 my-16 relative ml-4 md:ml-0 ">
        <h1 className="md:text-5xl text-4xl font-wide font-mono font-semibold">
          Blue Beetle :<br />
          Parabelium
        </h1>
        <div className=" mt-6 flex relative">
          <div className=" ">
            <button className="border bg-orange-500 px-4 text-black">
              IMdb
            </button>
            <span className="ml-2">860/100</span>
          </div>
          <div className="absolute left-40">
            <FontAwesomeIcon icon={faAppleWhole} className="text-red-600" />
            <span className="ml-2">80%</span>
          </div>
        </div>
        <p className="my-4 text-black md:text-2xl font-wide font-mono font-semibold">
          {" "}
          Recent college grad Jaime Reyes returns home full of aspirations for
          <br />
          his future, only to find that home is not quite as he left it. <br />
          As he searches to find his purpose in the world, <br />
          fate intervenes when Jaime unexpectedly finds himself <br />
          in possession of an ancient relic of alien biotechnology: the Scarab.
        </p>
        <div className="my-6 md:py-4 py-2 bg-pink-500 px-10 md:mr-60 mx-4 text-center ">
          <span className="mr-6">
            <FontAwesomeIcon icon={faCirclePlay} />
          </span>
          <button className="text-white">Watch Trailer</button>
        </div>
      </div>
    </>
  );
}

export default LandingBannerMainPage;
