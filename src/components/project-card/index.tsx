import React from "react";
import { Link } from "react-router-dom";
import GithubIcon from "../github-icon";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  to: string;
  index: number;
  githubUrl: string;
  githubUrl2:string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageUrl,
  description,
  to,
  index,
  githubUrl,
  githubUrl2
}) => {
  const isReversed = index % 2 !== 0;
  const showGithubIcons = title === "Food Recipes" || title === "Blog";

  return (
    <div
      className="flex flex-col p-4 mb-6  md:max-w-xl rounded-3xl overflow-hidden shadow-xl mx-auto border border-gray-200 bg-white"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #f7fafc, #edf2f7)",
      }}
    >
      <Link to={to} className="block">
        <div
          className={`flex flex-grow ${
            isReversed ? "flex-row-reverse" : ""
          } hover:transform hover:scale-105 transition-transform duration-500 ease-in-out`}
        >
          {/* Contenedor de la imagen */}
          <img
            className="w-1/2 aspect-square object-cover rounded-2xl shadow-lg"
            src={imageUrl}
            alt={title}
          />
          {/* Contenedor del texto */}
          <div className="flex flex-col justify-evenly px-3 md:px-4 flex-grow">
            <h2 className="font-bold text-2xl mb-2 text-indigo-700">{title}</h2>
            <p className="text-black text-md font-semibold text-left -mr-1">
              {description}
            </p>
          </div>
        </div>
      </Link>
      {showGithubIcons ? (
        <div
          className={`flex flex-grow ${isReversed ? "" : "flex-row-reverse"} my-2 md:my-0  mx-4`}
        >
          <p className="text-xs font-medium"> Pages <GithubIcon url={githubUrl2} /></p>
          <p className="text-xs font-medium"> Components <GithubIcon url={githubUrl} /></p>
          
        </div>
      ) : (
        <div
          className={`flex flex-grow ${isReversed ? "" : "flex-row-reverse"}`}
        >
          <GithubIcon url={githubUrl} />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
