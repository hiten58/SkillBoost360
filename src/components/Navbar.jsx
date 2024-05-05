import { useState } from "react";
import logo from "../assets/logo.jpg";
// To import icons from react
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "features" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-12 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-0"
            >
              <img className="h-20 inline-block items-center" src={logo} />
              <span>SkillBoost360</span>
            </a>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  spy={true}
                  smooth={true}
                  offset={100}
                  key={link}
                  to={path}
                  className="block hover:text-purple-300 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              Language
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign Up
            </button>
          </div>

          {/* Menu button only to display on mobile screen */}

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <IoMdMenu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Nav items for mobile devices */}

      <div className={`space-y-4 px-4 pt-5 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {navItems.map(({ link, path }) => (
          <a key={link} href={path} className="block hover:text-purple-300">
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
