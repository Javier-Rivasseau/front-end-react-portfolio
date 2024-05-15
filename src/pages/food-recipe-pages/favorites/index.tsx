import React, { useContext } from "react";
import { GlobalContext } from "../../../context";
import RecipeItem from "../../../components/food-recipe/food-recipe-item";

const FoodRecipeFavorites = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    return <div> Loading..,</div>;
  }

  const { favoritesList } = context;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length ? (
        favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-bold">
            Nothing is added to favorites.
          </p>
        </div>
      )}
    </div>
  );
};

export default FoodRecipeFavorites;
