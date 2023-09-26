

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function LandingFooter() {
  return (
    <>
      <div className=" text-center mt-10 ">
        <FontAwesomeIcon icon={faFacebook} className="mr-4" />
        <FontAwesomeIcon icon={faInstagram} className="mr-4" />
        <FontAwesomeIcon icon={faTwitter} className="mr-4" />
        <FontAwesomeIcon icon={faYoutube} className="mr-4" />
      </div>
      <div className="flex justify-center mt-4">
        <p className="mr-4">Conditions of Use</p>
        <p className="mr-4">Privacy and Policy</p>
        <p className="mr-4">Press Room</p>
      </div>
      <div className=" text-center mt-4">
        © 2021 MovieBox by Adriana Eka Prayudha{" "}
      </div>
    </>
  );
}

export default LandingFooter;
