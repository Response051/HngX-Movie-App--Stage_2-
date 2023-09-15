import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import imageLogo from "../assets/Logo.png";
import Menu from "../assets/Menu.png";

function LandingNavBar() {
  return (
    <>
      <section className="flex justify-evenly bg-slate-700 ">
        <div>
          <img src={imageLogo} alt="MovieBoxLogo" />
        </div>

        <div className="relative">
          <span className="absolute top-0 bottom-4 w-6 h-6 my-auto text-gray-400 right-2">
            {" "}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <form>
            <input
              className="w-full py-2 px-16  text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 "
              type="text"
              placeholder="What do you want to watch"
              name="search"
            />
          </form>
        </div>

        <div className="flex relative">
          <p>Sign In</p>
          <img src={Menu} alt="Menu" className=" absolute left-20" />
        </div>
      </section>
    </>
  );
}

export default LandingNavBar;
