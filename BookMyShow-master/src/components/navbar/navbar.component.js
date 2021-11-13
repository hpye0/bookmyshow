import react from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMenuOutline } from "react-icons/io5";
import BMSlogo from "../../assets/logoBMS.svg";
const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-300 flex text-xs items-center">
            Devakottai <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center bg-white gap-3 px-1 py-1 rounded-sm">
      <BiSearch />
      <input
        type="search"
        className="w-full focus:outline-none"
        placeholder="Search for movies, Events, Plays, Sports and Activities"
      />
    </div>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto ml-5 px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-4">
          <div className="w-44 h-12">
            <img src={BMSlogo} alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center bg-white gap-3 px-1 py-1.5 rounded text-gray-500">
            <BiSearch />
            <input
              type="search"
              className="w-full focus:outline-none"
              placeholder="Search for movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-300 flex text-sm items-center hover:text-white cursor-pointer">
            Devakottai <AiFillCaretDown className="text-white text-xs" />
          </span>
          <button className="bg-redpinkbutton-300 text-white text-xs rounded px-3 py-1">
            Sign in
          </button>
          <div className="h-8 w-8 text-white">
            <IoMenuOutline className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-navCol-700 px-4 py-2.5">
        {/* mobile screen */}
        <div className="md:hidden">{<NavSm />}</div>
        {/* tablet screen */}
        <div className="hidden lg:hidden md:flex">{<NavMd />}</div>
        {/* desktop screen */}
        <div className="hidden lg:flex">{<NavLg />}</div>
      </nav>
    </>
  );
};

export default Navbar;
