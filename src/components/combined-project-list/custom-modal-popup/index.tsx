import React, { useState } from "react";
import Modal from "./modal";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

const TestModalPopUp = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOnClick = () => {
    setOpenModal(!openModal);
  };

  const handleCloseButton = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div className="flex flex-col  justify-center items-center h-3/4">
        <div>
          <ProjectSeparator title="CUSTOM MODAL POP UP" />
        </div>
        {openModal ? (
          <Modal
            header="Custom Modal Popup"
            body="This is the custom body of the Modal popup, and if you wish to modify it, you are free to do so. ."
            footer="This is the footer"
            closeButton={handleCloseButton}
          />
        ) : (
          <button
            className="font-bold text-md border text-white shadow-md rounded-lg px-2 py-3 m-2 bg-gray-800 hover:bg-gray-600 "
            onClick={handleOnClick}
          >
            Open modal Popup
          </button>
        )}
      </div>
      <div className="p-8">
        <GithubIcon url="https://github.com/Javier-Rivasseau/front-end-react-portfolio/tree/main/src/components/combined-project-list/custom-modal-popup" />
      </div>
    </div>
  );
};

export default TestModalPopUp;
