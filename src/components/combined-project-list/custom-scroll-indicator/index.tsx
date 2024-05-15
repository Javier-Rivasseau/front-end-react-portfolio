import React, { FC, useCallback, useEffect, useState } from "react";
import "./styles.css";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

const ScrollIndicator: FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const handleScrollPercentage = useCallback(() => {
    const scrolledQuantity =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (height) {
      const percentageScrolled = (scrolledQuantity / height) * 100;
      setScrollPercentage(percentageScrolled);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className=" w-screen h-72">
      <div
        style={{
          position: "fixed",
          top: "100px",
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div
          className="progress-bar rounded-full overflow-hidden"
          style={{
            width: `${scrollPercentage}%`,
            height: "0.7rem",
          }}
        ></div>
      </div>
      <div>
        <ProjectSeparator title="SCROLL INDICATOR" />
      </div>

      <p className="text-center text-2xl  font-semibold mb-8 px-4">
        At the top of the page, just below the navbar, you can see a yellow progress-bar that grows as you scroll down.
      </p>
      <p className="text-center text-lg md:text-ml font-semibold mb-8 px-4">
        **This project has been done without using any third-party library
        package**
      </p>

      <div className="p-8">
        <GithubIcon url="https://github.com/Javier-Rivasseau/front-end-react-portfolio/tree/main/src/components/combined-project-list/custom-scroll-indicator"/>
      </div>
    </div>
    
  );
};

export default ScrollIndicator;
