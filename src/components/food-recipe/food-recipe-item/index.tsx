import React from "react";
import { useNavigate } from "react-router-dom";

interface RecipeItemProps {
  item: Record<string, any>;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/food-recipe/recipe-item/${item?.id}`);
  };

  return (
    <div className="flex flex-col w-72  p-5 bg-white/75 shadow-xl gap-5 border-2 border-white rounded-2xl ">
      <div className="h-40 flex  justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe-item" className="block object-cover w-full" />
      </div>
      <div className="text-center">
        <span className="text-sm text-cyan-500 font-medium ">
          {item?.publisher}
        </span>
        <h3 className="font-bold  text-l text-black">{item?.title}</h3>
        <button
          onClick={handleClick}
          className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white mt-5"
        >
          Recipe Details
        </button>
      </div>
    </div>
  );
};

export default RecipeItem;
