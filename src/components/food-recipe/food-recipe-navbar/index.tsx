import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../../context";

const FoodRecipeNavbar = () => {
  const context = useContext(GlobalContext);

  if (context === null) {
    return <div>Loading...</div>;
  }

  const { searchParam, setSearchParam, handleSubmit,  } = context;

  console.log(searchParam);

  return (
    <nav className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center py-8 container mx-auto ">
      <NavLink to={"/food-recipe"} className={"text-black hover:text-gray-600"}>
        <h2 className="text-2xl font-semibold"> FoodRecipe</h2>
      </NavLink>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Search"
          placeholder="Search for recipes..."
          className="bg-white/75 py-3 px-8 rounded-2xl outline-none lg:w-96 shadow-lg shadow-sky-700 focus:shadow-sky-800"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <button
          type="submit"
          disabled={searchParam === "" ? true : false}
          className="p-3 px-8 shadow-lg shadow-sky-700  bg-sky-700 hover:bg-sky-800 text-white font-medium  border-2 border-sky-800   rounded-lg ml-4"
        >
          {" "}
          Search
        </button>
      </form>
      <ul className="flex gap-5 ">
        <li>
          <NavLink
            to={"/food-recipe"}
            className="text-black hover:text-gray-600 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/food-recipe/favorites"}
            className={"text-black hover:text-gray-600 duration-300"}
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default FoodRecipeNavbar;
