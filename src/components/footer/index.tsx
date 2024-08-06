import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="mx-auto py-14 bg-gray-500 w-screen">
      <div className="flex justify-between items-center md:px-16 px-8 ">
        <div>
          <p className="font-bold">
            Copyright © 2024. All rights are reserved.
          </p>
        </div>
        <div className="flex ">
          <a
            href={"https://github.com/Javier-Rivasseau"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="px-4 text-gray-800"
            />
          </a>
          <a
            href={
              "https://www.linkedin.com/in/javier-antonio-rivasseau-ab8747133/"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="text-gray-800"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
