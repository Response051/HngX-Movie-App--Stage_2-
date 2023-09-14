import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function LandingBannerMainPage() {
  return (
    <div className="text-left lg:ml-48 mt-16">
      <h1 className="text-5xl">
        John Wick 3 :<br />
        Parabelium
      </h1>
      <div className=" mt-6 flex relative">
        <div className=" ">
          <button className="border bg-orange-500 px-4 text-black">IMdb</button>
          <span className="ml-2">860/100</span>
        </div>
        <div className="absolute left-40">
          <FontAwesomeIcon icon={faAppleWhole} className="text-red-600" />
          <span className="ml-2">80%</span>
        </div>
      </div>
      <p>
        {" "}
        John wick is on the run after killing a member <br />
        of an international killing guild. A bounty of <br />
        $14million is plaved on his head. <br />
        He is the target of the hit men and women every where.
      </p>
      <div className="mt-4 py-2 bg-pink-500 pl-20">
        <span className="mr-6">
          <FontAwesomeIcon icon={faCirclePlay} />
        </span>
        <button>Watch Trailer</button>
      </div>
    </div>
  );
}

export default LandingBannerMainPage;
