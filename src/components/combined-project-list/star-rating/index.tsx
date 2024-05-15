import React, { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

interface StarRatingProps {
  noOfStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ noOfStars = 10 }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (getCurrentIndex: number) => {
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex: number) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = (getCurrentIndex: number) => {
    setHover(rating);
  };

  const handleRestart = () => {
    setRating(0);
  };
  useEffect(() => {
    setHover(rating);
  }, [rating]);

  return (
    <div className="flex items-center flex-col w-screen h-96 pt-14">
      <ProjectSeparator title="STAR RATING" />
      <div className="flex justify-center">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              onClick={() => handleClick(index)} // Empty function
              onMouseEnter={() => handleMouseEnter(index)} // Empty function
              onMouseLeave={() => handleMouseLeave(index)} // Empty function
              size={40}
              style={{
                color: index <= (rating || hover) ? "yellow" : "black",
              }}
            />
          );
        })}
      </div>

      <button
        className="flex justify-center items-center bg-blue-500 rounded-lg p-3 font-bold border-4 mt-5 hover:bg-blue-300"
        onClick={handleRestart}
      >
        Restart Hover
      </button>
      <div className="p-8">
        <GithubIcon url="https://github.com/Javier-Rivasseau/front-end-react-portfolio/tree/main/src/components/combined-project-list/star-rating"/>
      </div>
    
    </div>
  );
};

export default StarRating;
