import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface GithubIconProps {
  url: string;
}

const GithubIcon: React.FC<GithubIconProps> = ({ url }) => {
  return (
    <div className="flex justify-center items-center">
        <a href={`${url}`} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={faGithub}
        size="2x"
        className="px-4 text-gray-800 "
      />
    </a>
    </div>
  );
};

export default GithubIcon;
