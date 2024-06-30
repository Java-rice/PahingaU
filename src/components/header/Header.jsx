// src/components/header/Header.jsx
import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { Button } from "../buttons/Button";
import "./Header.css";


const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for login status

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobileMenu(window.innerWidth <= 1000);

      if (window.innerWidth > 1000 && clicked) {
        setClicked(false);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [clicked]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleClose = () => {
    setClicked(false);
  };

  return (
    <>
      <nav
        className={`w-full flex fixed top-0 left-0 right-0 items-center gap-20 justify-between z-10 transition duration-300 ease-in-out px-[10%] py-4 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <Link to="/">
          <div className="w-40 cursor-pointer hover:scale-110 transition duration-500 ease-in-out">
            <Logo />
          </div>
        </Link>
        {isMobileMenu ? (
          <div
            className="lg:hidden flex flex-col justify-around h-6 w-6 cursor-pointer"
            onClick={handleClick}
          >
            <div
              className={`w-6 h-1 bg-gray-800 transition duration-300 ease-in-out ${
                clicked ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-gray-800 transition duration-300 ease-in-out ${
                clicked ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-gray-800 transition duration-300 ease-in-out ${
                clicked ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>
        ) : (
          <div className="hidden lg:flex flex-grow items-center justify-end">
            <ul className="flex items-center space-x-8 text-gray-800">
              <li className="text-base font-bold font-sans cursor-pointer">
                <NavLink
                  exact
                  to="/"
                  activeClassName="text-[#0077B5]"
                  className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                >
                  Home
                </NavLink>
              </li>
              <li className="text-base font-bold font-sans cursor-pointer">
                <NavLink
                  to="/About"
                  activeClassName="text-[#0077B5]"
                  className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                >
                  About
                </NavLink>
              </li>
              <li className="text-base font-bold font-sans cursor-pointer">
                <NavLink
                  to={isLoggedIn ? "/FindDorms" : "/Login"}
                  activeClassName="text-[#0077B5]"
                  className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                >
                  Find Dorms
                </NavLink>
              </li>
              <li className="text-base font-bold font-sans cursor-pointer">
                <NavLink
                  to={isLoggedIn ? "/PostProperty" : "/Login"}
                  activeClassName="text-[#0077B5]"
                  className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                >
                  Post My Property
                </NavLink>
              </li>
              <li className="text-base font-bold font-sans cursor-pointer">
                <NavLink
                  to="/HowItWorks"
                  activeClassName="text-[#0077B5]"
                  className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                >
                  How It Works
                </NavLink>
              </li>
              <li className="text-base font-bold font-sans cursor-pointer">
                <Button variant="clear">
                  <NavLink to="/Login" activeClassName="text-[#0077B5]">
                    Login
                  </NavLink>
                </Button>
              </li>
              <li className="text-base font-bold font-sans cursor-pointer">
                <Button variant="dark">
                  <NavLink to="/Register" activeClassName="text-[#0077B5]">
                    Register
                  </NavLink>
                </Button>
              </li>
            </ul>
          </div>
        )}
        {isMobileMenu && clicked && (
          <div className="fixed flex pb-10 px-10 w-1/2 top-20 right-0 items-center justify-center bg-white shadow-lg transition duration-300 ease-in-out z-20">
            <div className="relative w-[80%]">
              <ul className="flex flex-col mt-4 space-y-4 text-gray-800">
                <li className="text-base font-bold font-sans cursor-pointer">
                  <NavLink
                    exact
                    to="/"
                    activeClassName="text-[#0077B5]"
                    className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-base font-bold font-sans cursor-pointer">
                  <NavLink
                    to="/About"
                    activeClassName="text-[#0077B5]"
                    className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                  >
                    About
                  </NavLink>
                </li>
                <li className="text-base font-bold font-sans cursor-pointer">
                  <NavLink
                    to={isLoggedIn ? "/FindDorms" : "/Login"}
                    activeClassName="text-[#0077B5]"
                    className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                  >
                    Find Dorms
                  </NavLink>
                </li>
                <li className="text-base font-bold font-sans cursor-pointer">
                  <NavLink
                    to={isLoggedIn ? "/PostProperty" : "/Login"}
                    activeClassName="text-[#0077B5]"
                    className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                  >
                    Post My Property
                  </NavLink>
                </li>
                <li className="text-base font-bold font-sans cursor-pointer">
                  <NavLink
                    to="/HowItWorks"
                    activeClassName="text-[#0077B5]"
                    className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                  >
                    How It Works
                  </NavLink>
                </li>
                <li className="text-base font-bold font-sans cursor-pointer">
                  <Button variant="clear">
                    <NavLink to="/Login" activeClassName="text-[#0077B5]">
                      Login
                    </NavLink>
                  </Button>
                </li>
                <li className="text-base font-bold font-sans cursor-pointer">
                  <Button variant="dark">
                    <NavLink to="/Register" activeClassName="text-[#0077B5]">
                      Register
                    </NavLink>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
      <div className="mt-20"></div>
    </>
  );
};

export default Header;
