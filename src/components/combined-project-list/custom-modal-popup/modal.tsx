// modal.tsx
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  header?: string;
  body?: string;
  footer?: string;
  closeButton: () => void;
}

const Modal: FC<ModalProps> = ({ header= "HEADER", body = "BODY", footer="FOOTER", closeButton }) => {
  return (
    <div className="flex fixed inset-0  items-center justify-center overflow-auto animate-bounce-1  ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-full">
        <div className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-t-lg">
          <h3 className="text-lg font-semibold">{header}</h3>
          <button
            className="text-gray-400 hover:text-gray-200"
            onClick={closeButton}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="p-4">{body}</div>
        <div className="bg-gray-200 p-4 rounded-b-lg">{footer}</div>
      </div>
    </div>
  );
};

export default Modal;