import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import Navbar from "./components/navbar";
import HomePage from "./pages/home-page";
import CombinedProjectPage from "./pages/combined-project-page";
import WeatherAppPage from "./pages/weather-app-page";
import FoodRecipeHome from "./pages/food-recipe-pages/home";
import FoodRecipeFavorites from "./pages/food-recipe-pages/favorites";
import FoodRecipeDetails from "./pages/food-recipe-pages/details";
import FoodRecipeContainer from "./components/food-recipe/food-recipe-container";
import BlogContainer from "./components/blog-app/blog-container";
import HomeBlogPage from "./pages/blog-page/home";
import AddBlogPage from "./pages/blog-page/add-blog";

function App() {
  return (
    <div>
      <div className="pt-28 md:pt-24">
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<HomePage />} />

          {/* Multiple small-projects Route */}
          <Route path="/combined-project" element={<CombinedProjectPage />} />

          {/* Weather App Route */}
          <Route path="/weather-app" element={<WeatherAppPage />} />

          {/* Food recipe routes */}
          <Route
            path="/food-recipe"
            element={
              <FoodRecipeContainer>
                <FoodRecipeHome />
              </FoodRecipeContainer>
            }
          />
          <Route
            path="/food-recipe/favorites"
            element={
              <FoodRecipeContainer>
                <FoodRecipeFavorites />
              </FoodRecipeContainer>
            }
          />
          <Route
            path="/food-recipe/recipe-item/:id"
            element={
              <FoodRecipeContainer>
                <FoodRecipeDetails />
              </FoodRecipeContainer>
            }
          />

          {/* Blog routes */}

          <Route
            path="/blog"
            element={
              <BlogContainer>
                <HomeBlogPage />
              </BlogContainer>
            }
          />
          <Route
            path="/blog/add-blog"
            element={
              <BlogContainer>
                <AddBlogPage />
              </BlogContainer>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
