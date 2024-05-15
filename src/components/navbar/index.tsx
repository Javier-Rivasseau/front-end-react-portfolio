import { Link, useLocation } from "react-router-dom";
import { scrollToElement } from "../../utils/scrollToElement";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-100 shadow-lg py-8 md:pt-8 px-7 flex justify-between items-center z-50">
      <h2 className="text-black  font-bold text-3xl hover:text-gray-300">
        {location.pathname !== "/" ? (
          <Link to="/">Javier.dev</Link>
        ) : (
          <Link to="#" onClick={() => scrollToElement("home")}>Javier.dev</Link>
        )}
      </h2>
      {location.pathname !== `/` ? (
        <ul className="mx-auto pr-28 text-xl  text-black font-bold">PROJECT</ul>
      ) : (
        <div className="">
          <ul className={"hidden md:flex space-x-5 md:text-xl"}>
            <li>
              <Link to="#"
                onClick={() => scrollToElement("home")}
                className="text-black hover:text-gray-300 font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => scrollToElement("about")}
                className="text-black hover:text-gray-300 font-bold"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => scrollToElement("projects")}
                className="text-black hover:text-gray-300 font-bold"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => scrollToElement("contact")}
                className="text-black hover:text-gray-300 font-bold"
              >
                Contact
              </Link>
            </li>
          </ul>
          <HiOutlineMenuAlt3 onClick={toggleMenu} cursor="pointer" className="md:hidden size-12 p-2 " />
          {showMenu ? (
            <ul className={`${"md:hidden flex flex-col absolute top-16 right-4 z-14"}`}>
              <li>
                <Link to="#"
                  onClick={() => {
                    scrollToElement("home");
                    setShowMenu(false);
                  }}
                  className="text-black hover:text-gray-300 font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="#"
                  onClick={() => {
                    scrollToElement("about");
                    setShowMenu(false);
                  }}
                  className="text-black hover:text-gray-300 font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="#"
                  onClick={() => {
                    scrollToElement("projects");
                    setShowMenu(false);
                  }}
                  className="text-black hover:text-gray-300 font-bold"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#"
                  onClick={() => {
                    scrollToElement("contact");
                    setShowMenu(false);
                  }}
                  className="text-black hover:text-gray-300 font-bold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
      )}
    </nav>
  );
};

export default Navbar;