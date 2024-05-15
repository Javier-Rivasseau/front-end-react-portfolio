import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

const LightDarkTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <ProjectSeparator title="LIGHT DARK MODE" />
      <div className="container">
        <p className="">Hello World</p>
        <button className="" onClick={handleToggleTheme}>
          Change Theme
        </button>

        <p className="texto">
          This is a React project, featuring a custom hook designed to retrieve
          and persistently modify key values stored in localStorage. -- Refresh the
          page and check its persistency --
        </p>
      </div>
      <div className="p-8 ">
        <GithubIcon  url="https://github.com/Javier-Rivasseau/front-end-react-portfolio/tree/main/src/components/combined-project-list/light-dark-theme"/>
      </div>
    
    </div>
  );
};

export default LightDarkTheme;
