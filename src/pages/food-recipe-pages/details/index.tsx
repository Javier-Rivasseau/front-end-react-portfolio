import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../context";

const FoodRecipeDetails = () => {
  const params = useParams();

  console.log(params);

  useEffect(() => {
    fetchDetailsData();
    //eslint-disable-next-line
  }, []);

  const fetchDetailsData = async () => {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
      );
      const data = await res.json();

      if (data?.data?.recipe) {
        setRecipeDetailsData(data?.data?.recipe);
      }
      console.log(data?.data?.recipe);
    } catch (error) {
      console.log(error);
    }
  };

  const context = useContext(GlobalContext);

  if (!context) {
    return <div>Loading..</div>;
  }
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoritesList,
  } = context;

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-1 lg:row-start-auto ">
        <div className="h-96 overflow-hidden rounded-xl ">
          <img
            src={recipeDetailsData?.image_url}
            alt=""
            className="w-full h-full object-cover block hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-500 font-medium ">
          {recipeDetailsData?.publisher}
        </span>
        <h3 className="font-bold  text-l text-black">
          {recipeDetailsData?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoritesList.findIndex(
              (item) => item.id === recipeDetailsData.id
            ) !== -1
              ? "Delete from favorites"
              : "Save as favorite"}
          </button>
        </div>
        <div>
          <span className="text-3xl font-semibold  text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3 mt-8">
            {recipeDetailsData?.ingredients?.map(
              (ingredient: any, index: any) => {
                return (
                  <li className="" key={index}>
                    <span className="text-2xl font-semibold  text-black ">
                      {ingredient.quantity} {ingredient.unit}{" "}
                      {ingredient.description}
                    </span>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodRecipeDetails;
