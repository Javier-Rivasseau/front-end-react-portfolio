import { FormEvent, ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface GlobalContextType {
  searchParam: string;
  setSearchParam: (param: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  setLoading: (param: boolean) => void;
  recipeDetailsData: any;
  setRecipeDetailsData: any;
  recipes: Array<{
    id: string;
    image_url: string;
    publisher: string;
    title: string;
  }>;
  handleAddToFavorite: (param: any) => void;
  favoritesList: Array<RecipeDetailsType>;
  blogFormData: { title: string; description: string };
  setBlogFormData: (param: { title: string; description: string }) => void;
  blogList: Array<{}>;
  setBlogList: (param: { title: string; description: string }[]) => void;
  isEdited: Boolean;
  setIsEdited: (param:Boolean) => void
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

interface GlobalStateProps {
  children: ReactNode;
}
interface RecipesTypes {
  id: string;
  image_url: string;
  publisher: string;
  title: string;
}

interface Ingredients {
  quantity: number;
  unit: string;
  description: string;
}
interface RecipeDetailsType {
  publisher: string;
  ingredients: Ingredients[];
  source_url: string;
  image_url: string;
  title: string;
  servings: number;
  cooking_time: number;
  id: string;
}

interface blogFormTypes {
  title: string;
  description: string;
}

const GlobalState: React.FC<GlobalStateProps> = ({ children }) => {
  const [searchParam, setSearchParam] = useState<string>("");
  const [recipes, setRecipes] = useState<RecipesTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<null | any>(null);
  const [recipeDetailsData, setRecipeDetailsData] =
    useState<RecipeDetailsType | null>(null);
  const [favoritesList, setFavoritesList] = useState<RecipeDetailsType[]>([]);
  const [blogFormData, setBlogFormData] = useState<blogFormTypes>({
    title: "",
    description: "",
  });
  const [blogList, setBlogList] = useState<Array<{}>>([]);
  const [isEdited, setIsEdited] = useState<Boolean>(false)

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      if (data && data.data && data.data.recipes && data.data.recipes.length) {
        setRecipes(data.data.recipes);
        setLoading(false);
        setSearchParam("");
        if (location.pathname !== "/food-recipe") {
          navigate("/food-recipe");
        }
      }
    } catch (error: any) {
      console.log(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  if (errorMsg !== null) {
    return <div>An error occurred!</div>;
  }

  const handleAddToFavorite = (currentItem: RecipeDetailsType) => {
    console.log(currentItem);
    let cpyFavoritesList: Array<RecipeDetailsType> = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item: RecipeDetailsType) => item.id === currentItem.id
    );
    if (index === -1) {
      cpyFavoritesList.push(currentItem);
    } else {
      cpyFavoritesList.splice(index, 1);
    }

    setFavoritesList(cpyFavoritesList);
    // console.log(favoritesList);
  };
  // console.log(recipes);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        setLoading,
        recipes,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
        blogFormData,
        setBlogFormData,
        blogList,
        setBlogList,
        isEdited,
        setIsEdited
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
