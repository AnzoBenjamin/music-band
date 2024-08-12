import NavBar from "../components/NavBar";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const LangingPage = () => {
  return (
    <div className="bg-hero h-screen bg-cover bg-center relative">
      <NavBar />
      <div className="text-white">
        <h1 className="font-body text-4xl ms-auto uppercase">
          Experience music a new
        </h1>
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
      </ul>
    </div>
  );
};

export default LangingPage;
