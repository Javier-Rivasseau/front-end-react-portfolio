import React, { useContext } from "react";
import { GlobalContext } from "../../../context";
import RecipeItem from "../../../components/food-recipe-item";

const FoodRecipeHome = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    return <div> Loading..,</div>;
  }

  const { recipes, loading } = context;

  if (loading) {
    return <div>Data Loading! please wait..</div>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-5">
      {recipes && recipes.length
        ? recipes.map((item) => <RecipeItem key={item.id} item={item} />)
        : (
          <div>
            <p className='lg:text-4xl text-xl text-center text-black font-bold'>
              Nothing to show. Search something like, banana, apple, etc.
            </p>
          </div>
        )}
    </div>
  );
};

export default FoodRecipeHome;
