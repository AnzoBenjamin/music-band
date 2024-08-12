import { CgMenuRound } from "react-icons/cg";
import logo from "/logo.svg"; // Import SVG as a React component

const NavBar = () => {
  console.log(logo);
  return (
    <div className="text-white flex justify-between items-center px-12 relative bg-nav py-4">
      <img src={logo} alt="Logo" className="h-16 w-16"/>
      <CgMenuRound className="h-12 w-12" />
    </div>
  );
};

export default NavBar;
