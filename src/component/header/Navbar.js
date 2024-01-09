import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import newlogog from "../../images/newlogo.jpeg";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [isSticky, setIsSticky] = useState(true);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  const toggleIcon = () => {
    setShowIcon((prevShowIcon) => !prevShowIcon);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMegaMenu = () => {
    setMegaMenuOpen(!isMegaMenuOpen);
    setShowIcon((prevShowIcon) => !prevShowIcon);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed flex w-full p-4 z-50 ${
          isSticky ? "bg-opacity-80  bg-transparent backdrop-blur-md" : ""
        } transition-all ease-in-out duration-300`}
      >
        {/* Left side - Logo */}
        <div className="flex-shrink-0 ml-12">
          <img src={newlogog} alt="" className="h-12 w-36" />
        </div>

        {/* Right side - Navigation */}

        <div className="flex-grow flex items-center justify-end mr-24">
          <ul className="flex space-x-6 text-white">
            <li
              className="hover:text-blue-500 text-md font-semibold flex items-center cursor-pointer"
              onClick={toggleMegaMenu}
            >
              Service
              {showIcon ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1.5em"
                  width="1.5em"
                  className="mt-1"
                >
                  <path d="M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1.5em"
                  width="1.5em"
                  className="mt-1"
                >
                  <path d="M8.7 14.7a1 1 0 01-1.4-1.4l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.4L12 11.42l-3.3 3.3z" />
                </svg>
              )}
              <MegaMenu isOpen={isMegaMenuOpen} onClose={toggleMegaMenu} />
            </li>
            <li className="hover:text-blue-500 text-md font-semibold">
              Careers
            </li>
            <li className="hover:text-blue-500 text-md font-semibold">About</li>
            <li className="hover:text-blue-500 text-md font-semibold">Blog</li>
          </ul>
          <Link to="/contactUs">
            <button className="bg-white text-black px-5 py-3 rounded ml-4 font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
