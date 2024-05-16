import { Link, useLocation } from "react-router-dom";
import { scrollToElement } from "../../utils/scrollToElement";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiHome, HiUser, HiCode, HiMail } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-100 shadow-lg md:py-8 py-10 px-4 flex justify-between items-center z-50">
      <h2 className="text-black font-bold text-2xl md:text-3xl hover:text-gray-300">
        {location.pathname !== "/" ? (
          <Link to="/">Javier.dev</Link>
        ) : (
          <Link to="#" onClick={() => scrollToElement("home")}>
            Javier.dev
          </Link>
        )}
      </h2>

      {location.pathname !== "/" ? (
        <ul className="mx-auto pr-28 text-xl text-black font-bold">PROJECT</ul>
      ) : (
        <div className="">
          <ul className="hidden md:flex space-x-5 md:text-xl">
            <li>
              <Link
                to="#"
                onClick={() => scrollToElement("home")}
                className="text-black hover:text-gray-300 font-bold flex items-center gap-2"
              >
                 Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => scrollToElement("about")}
                className="text-black hover:text-gray-300 font-bold flex items-center gap-2"
              >
                 About
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => scrollToElement("projects")}
                className="text-black hover:text-gray-300 font-bold flex items-center gap-2"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => scrollToElement("contact")}
                className="text-black hover:text-gray-300 font-bold flex items-center gap-2"
              >
                Contact
              </Link>
            </li>
          </ul>

          <HiOutlineMenuAlt3
            onClick={toggleMenu}
            className="md:hidden text-2xl cursor-pointer"
          />

          {showMenu && (
            <div className={`${"md:hidden flex bg-gray-100 rounded-xl  flex-col absolute top-24 right-0 left-0 z-14"}`}>
              <ul className="flex flex-col gap-4 p-4">
                <li>
                  <Link
                    to="#"
                    onClick={() => {
                      scrollToElement("home");
                      setShowMenu(false);
                    }}
                    className="text-black hover:text-gray-300 font-bold flex items-center gap-2"
                  >
                    <HiHome /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={() => {
                      scrollToElement("about");
                      setShowMenu(false);
                    }}
                    className="text-black hover:text-gray-300 font-bold flex items-center gap-2"
                  >
                    <HiUser /> About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={() => {
                      scrollToElement("projects");
                      setShowMenu(false);
                    }}
                    className="text-black hover:text-gray-300 font-bold flex items-center gap-2"
                  >
                    <HiCode /> Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={() => {
                      scrollToElement("contact");
                      setShowMenu(false);
                    }}
                    className="text-black hover:text-gray-300 font-bold flex items-center gap-2"
                  >
                    <HiMail /> Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;