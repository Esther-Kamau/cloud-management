import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../assets/Logo.png";

const Navbar = () => {
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
            <button className="border-none bg-white text-black mr-4">Sign In</button>
            <button className="border-none bg-white text-black mr-4">Sign Up</button>
            </div>
      </div>

      <MenuIcon className="w-6" />
    </div>
  );
};

export default Navbar;
