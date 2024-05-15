import React from "react";
import AboutMeImage from '../../assets/images/about_me.jpg';

const AboutMe = () => {
  return (
    <div id="about" className="bg-gray-100 border border-gray-200 px-4 pt-20 md:py-10"> 
      <div className="max-w-5xl mx-auto mb-1 flex flex-col md:flex-row items-center pt-8 md:pt-20 pb-8 md:pb-10">
        <img
          src={AboutMeImage}
          alt="AboutMe"
          className="w-full md:w-auto md:max-w-md rounded-2xl mb-6 md:mb-0 md:mr-8"
        />
        <div className="md:flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-xl font-bold pb-2 md:pb-5 font-robot text-blue-600">
            
            ABOUT ME
          </h2>
          <h2 className="text-2xl md:text-2xl font-bold font-sans">
            Front-end Developer
          </h2>
          <h2 className="text-2xl md:text-2xl font-bold font-sans pb-2 md:pb-3">
            based in Buenos Aires, Argentina 📍
          </h2>
          <p className="mb-4 md:mb-4">
            Hey, my name is Javier, and I'm a Frontend Developer. My passion is
            to create and develop a clean UI/UX for my users.
          </p>
          <p>
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
