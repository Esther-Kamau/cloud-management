import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[100px] z-10 bg-blue-900 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="h-[180px] w-[180px]" src={Logo} alt="Logoimg" />
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-white text-black mr-4 hover:text-white hover:bg-blue-300">
            Sign In
          </button>
          <button className="border-none bg-white text-black px-8 py-3 hover:text-white hover:bg-blue-300">
            Sign Up
          </button>
        </div>
        {/* toggle state */}
        <div className="md:hidden" onClick={handleClick}>
          {/* if the opposite of nav is true display this else xicon */}
          {!nav ? (
            <MenuIcon className="w-8 stroke-white" />
          ) : (
            <XIcon className="w-8 stroke-white" />
          )}
        </div>
      </div>
      {/* if nav is not true hide the menu if tru display the menu */}
      <ul className={!nav ? "hidden" : "absolute bg-blue-900 w-full px-8"}>
        <li className="border-b-2 border-blue-200 w-full">Home</li>
        <li className="border-b-2 border-blue-200 w-full">About</li>
        <li className="border-b-2 border-blue-200 w-full">Support</li>
        <li className="border-b-2 border-blue-200 w-full">Platforms</li>
        <li className="border-b-2 border-blue-200 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="text-white mb-4 ">Sign In</button>
  
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
