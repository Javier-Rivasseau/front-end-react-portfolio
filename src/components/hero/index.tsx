import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import project1Image from "../../assets/images/hero_image4.jpeg";
import wavingHand from "../../assets/images/waving_hand.png";
import icons1 from "../../assets/images/icons1.svg";
import icons2 from "../../assets/images/icons2.svg";
import icons3 from "../../assets/images/icons3.svg";
import icons4 from "../../assets/images/icons4.svg";
import icons5 from "../../assets/images/mongodb.svg";
import icons6 from "../../assets/images/expressjs.svg";

interface HeroProps {
  title: string;
  presentation: string;
}

const Hero: React.FC<HeroProps> = ({ title, presentation }) => {
  return (
    <div className="bg-gray-100 border border-gray-200 mx-auto w-full md:pl-16">
      {/* Presentación */}
      <div className="max-w-6xl mx-auto mb-1 flex flex-col md:flex-row items-center px-11">
        <div className="md:w-1/2 mb-8 md:mb-0 md:order-first order-last">
          <div className="flex items-center py-10">
            <h1 className="text-6xl md:text-6xl font-bold text-gray-800 inline-flex items-center">
              {title}
              <img
                src={wavingHand}
                alt="Waving hand"
                className="w-16 h-16 mt-auto mr-auto"
              />
            </h1>
          </div>
          <p className="text-lg font-semibold">{presentation}</p>
          <div className="flex justify-left mt-6">
            <a
              href={"https://github.com/Javier-Rivasseau"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="mr-4 text-gray-800"
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
        <div className="flex justify-center items-center md:order-last order-first ">
          <img
            src={project1Image}
            alt="Javier Rivasseau"
            className="mx-auto md:ml-24  relative w-72 h-72 mt-2 border-4 border-black animate-morphing  bg-gray-300 bg-cover bg-center"
          />
        </div>
      </div>
      {/* Tech Stack y barra divisoria */}
      <div className="flex max-w-6xl mx-auto px-10 py-10 md:py-16 flex-col md:flex-row items-center md:items-start">
        <div className="flex flex-col items-center md:items-start md:mr-8">
          <h2 className="text-3xl font-bold text-center md:text-left font-sans">
            Tech Stack
          </h2>
        </div>
        <div className="md:block md:h-9 md:w-px md:bg-gray-600 md:mx-8"></div>
        <div className="bg-gray-400 h-px w-1/3 md:h-auto md:w-px md:ml-4 my-2"></div>
        {/* Renderizar las tecnologías utilizadas aquí */}
        <ul className="flex pl-6 space-x-2">
          <div className="flex space-x-5 ">
          <li className="hover:scale-150 transition duration-700 w-20">
            <img src={icons1} alt="html,react" />
          </li>
          <li className="hover:scale-150 transition duration-700  w-20">
            <img src={icons2} alt="js,ts" />
          </li>
          </div>
          <div className="flex -space-x-8">
          <div className="flex -space-x-4">
            <li className="hover:scale-150 transition duration-700  w-20">
              <img src={icons3} alt="react,next" />
            </li>
            <li className="hover:scale-150 transition duration-700  w-20">
              <img src={icons4} alt="tailwind,saas" />
            </li>
          </div>
          <div className="flex -space-x-9">
            <li className="hover:scale-150 transition duration-700  w-20">
              <img src={icons5} alt="mongodb" />
            </li>
            <li className="hover:scale-150 transition duration-700  w-20">
              <img src={icons6} alt="expressjs" />
            </li>
          </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
