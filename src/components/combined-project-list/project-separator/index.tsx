import React from "react";
import { FaCircle } from "react-icons/fa";

interface ProjectSeparatorPros {
  title: string;
  titleColor?: string;
}

const ProjectSeparator: React.FC<ProjectSeparatorPros> = ({
  title,
  titleColor = "text-gray-700",
}) => {
  return (
    <div className="flex  items-center justify-center my-8 md:my-20 ">
      <FaCircle className="mx-2 text-gray-400" />
      <div className="min-w-[50px] border-t-2 border-gray-400"></div>
      <h1 className={`mx-4 text-4xl font-bold text-center ${titleColor}`}>{title}</h1>
      <div className="min-w-[50px] border-t-2 border-gray-400"></div>
      <FaCircle className="mx-2 text-gray-400" />
    </div>
  );
};

export default ProjectSeparator;
