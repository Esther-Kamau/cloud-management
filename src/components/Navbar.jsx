import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../assets/Logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav)

  return (
    <div className="w-screen h-[100px] z-10 bg-slate-900 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="h-[180px] w-[180px]" src={Logo} alt="Logoimg" />
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true}  duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="features" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
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
      <ul className={!nav ? "hidden" : "absolute bg-slate-900 w-full px-8"}>
        <li className="border-b-2 border-blue-200 w-full">
          {" "}
          <Link onClick={handleClose} to="home" smooth={true}  duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-blue-200 w-full">
          <Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>
            About
          </Link>
        </li>
        <li className="border-b-2 border-blue-200 w-full">
          {" "}
          <Link onClick={handleClose} to="support" smooth={true} offset={-250} duration={500}>
            Support
          </Link>
        </li>
        <li className="border-b-2 border-blue-200 w-full">
          {" "}
          <Link  onClick={handleClose} to="features" smooth={true} offset={-100} duration={500}>
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-blue-200 w-full">
          <Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>
            Pricing
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className=" bg-transparent text-white mb-4 hover:bg-white hover:text-black">
            Sign In
          </button>

          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
