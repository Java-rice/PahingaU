import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { Button } from "../buttons/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLandlord, setIsLandlord] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setIsLoggedIn(true);
      setIsLandlord(userData.isLandlord); // Ensure this correctly retrieves the landlord status
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setIsLandlord(false);
    navigate('/');
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleFindDormsClick = () => {
    // Optionally add any logic before navigating to FindDorms
    // For example, you might want to clear local state related to the map
    // or perform other actions.

    // Example: navigate to the FindDorms page
    navigate('/FindDorms');
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
                  onClick={handleFindDormsClick} // Handle FindDorms click
                >
                  Find Dorms
                </NavLink>
              </li>
              {isLandlord && (
                <li className="text-base font-bold font-sans cursor-pointer">
                  <NavLink
                    to="/PostProperty"
                    activeClassName="text-[#0077B5]"
                    className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                  >
                    Post My Property
                  </NavLink>
                </li>
              )}
              <li className="text-base font-bold font-sans cursor-pointer">
                <NavLink
                  to="/HowItWorks"
                  activeClassName="text-[#0077B5]"
                  className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                >
                  How It Works
                </NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="text-base font-bold font-sans cursor-pointer">
                    <NavLink
                      to="/Profile"
                      activeClassName="text-[#0077B5]"
                      className="flex items-center hover:text-[#0077B5] transition duration-300 ease-in-out"
                    >
                      Profile
                      <AccountCircleIcon className="ml-1" />
                    </NavLink>
                  </li>
                  <li className="text-base font-bold font-sans cursor-pointer">
                    <button
                      onClick={handleLogout}
                      className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
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
                    onClick={handleFindDormsClick} // Handle FindDorms click
                  >
                    Find Dorms
                  </NavLink>
                </li>
                {isLandlord && (
                  <li className="text-base font-bold font-sans cursor-pointer">
                    <NavLink
                      to="/PostProperty"
                      activeClassName="text-[#0077B5]"
                      className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                    >
                      Post My Property
                    </NavLink>
                  </li>
                )}
                <li className="text-base font-bold font-sans cursor-pointer">
                  <NavLink
                    to="/HowItWorks"
                    activeClassName="text-[#0077B5]"
                    className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                  >
                    How It Works
                  </NavLink>
                </li>
                {isLoggedIn ? (
                  <>
                    <li className="text-base font-bold font-sans cursor-pointer">
                      <NavLink
                        to="/Profile"
                        activeClassName="text-[#0077B5]"
                        className="flex items-center hover:text-[#0077B5] transition duration-300 ease-in-out"
                      >
                        Profile
                        <AccountCircleIcon className="ml-1" />
                      </NavLink>
                    </li>
                    <li className="text-base font-bold font-sans cursor-pointer">
                      <button
                        onClick={handleLogout}
                        className="hover:text-[#0077B5] transition duration-300 ease-in-out"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
