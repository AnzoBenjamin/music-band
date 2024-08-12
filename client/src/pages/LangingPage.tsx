import logo from "/logo.svg"; // Import SVG as a React component
import NavBar from "../components/NavBar";
import { FaXTwitter } from "react-icons/fa6";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const LangingPage = () => {
  return (
    <>
    <div className="bg-hero h-screen bg-cover bg-center relative">
      <NavBar />
      <div className="text-white h-3/4 ms-auto flex flex-col gap-4 justify-center items-center font-body">
        <div>
          <img src={logo} alt="Logo" className="h-64 w-64" />
        </div>
        <div className="text-center">
          <h1 className="font-body text-4xl uppercase">
            Experience music a new
          </h1>
          <h2>Join our band on a unique journey of tunes and lyricsm.</h2>
        </div>
        <div>
          <RiArrowDownDoubleLine className="h-12 w-12 icon-pulsate" />
        </div>
        <ul className="absolute bottom-0 right-0 p-4 flex flex-col gap-2">
          <li>
            <a href="">
              <FaFacebook className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="">
              <FaYoutube className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="">
              <FaXTwitter className="h-6 w-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="h-screen bg-album bg-cover bg-center text-white">
      <div className="">

      </div>
    </div>
    </>
  );
};

export default LangingPage;
