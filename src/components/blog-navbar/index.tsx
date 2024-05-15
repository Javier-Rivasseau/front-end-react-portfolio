import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

const BlogNavbar = () => {
  const context = useContext(GlobalContext);

  if (context === null) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="flex flex-col px-3 lg:flex-row gap-5 lg:gap-0 justify-between items-center py-8 container ">
      <NavLink to={"/blog"} className={"text-black hover:text-gray-600"}>
        <h2 className="text-3xl font-semibold"> Blog - MERN STACK</h2>
      </NavLink>

      <ul className="flex gap-5 ">
        <li>
          <NavLink
            to={"/blog"}
            className="text-black font-medium text-xl hover:text-gray-600 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/blog/add-blog"}
            className={
              "text-black font-medium text-xl hover:text-gray-600 duration-300"
            }
          >
            Add Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BlogNavbar;
