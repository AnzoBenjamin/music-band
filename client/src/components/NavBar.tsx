import { CgMenuRound } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="text-white flex justify-between items-center px-12 relative bg-nav">
      <img src="/logo.png" height={128} width={128}/>
      <CgMenuRound className="h-12 w-12"/>
    </div>
  );
};

export default NavBar;
