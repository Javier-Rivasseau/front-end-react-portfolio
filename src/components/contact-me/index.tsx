import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <div  id="contact" className="max-w-5xl mx-auto md:px-10 py-20 md:py-32">
      <div className="mb-6 md:mb-10 text-center md:text-left ">
        <p className="text-xl md:text-xl font-bold pb-2 md:pb-5 font-robot text-blue-700">
          CONTACT
        </p>
        <p className="text-bold text-3xl animate-pulse">Don't be shy! Hit me up! </p>
      </div>

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 text-gray-700 font-bold text-2xl">
        <div className="flex flex-col items-center md:items-start cursor-pointer">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span>Location</span>
          </div>
          <p>Buenos Aires, Argentina.</p>
        </div>

        <div className="flex flex-col items-center md:items-start cursor-pointer">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <span>Mail</span>
          </div>
          <p>ing.javier.rivasseau@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;