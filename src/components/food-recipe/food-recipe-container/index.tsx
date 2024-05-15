import React, { ReactNode } from "react";
import FoodRecipeNavbar from "../food-recipe-navbar";

interface FoodRecipeContainerProps {
    children: ReactNode
}

const FoodRecipeContainer : React.FC <FoodRecipeContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <FoodRecipeNavbar/>
      {children}
    </div>
  );
};

export default FoodRecipeContainer;
