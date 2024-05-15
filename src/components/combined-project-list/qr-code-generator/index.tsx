import React, { useState } from "react";
import QRCode from "react-qr-code";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

const QrCodeGenerator = () => {
  const [textToQr, setTextToQr] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const handleOnChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleOnCLick = () => {
    setTextToQr(input);
    setInput("")
    
  };

  return (
    <div>
        <ProjectSeparator title="QR CODE GENERATOR"/>
      <div className="flex items-center justify-center space-x-4 mb-4">
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your QR to create"
          onChange={handleOnChange}
          className="p-2 font-sans text-l "
          value={input}
        />
        <button        
          onClick={handleOnCLick}
          className={input !== "" ? "bg-red-400 p-2 rounded-md  font-bold" : "bg-red-200 p-2 rounded-md border border-md font-bold" }
          disabled={input === "" ? true: false}
        >
          GENERATE QR CODE
        </button>
      </div>
      <div className="flex justify-center p-4">
        <QRCode size={400} bgColor="white" value={textToQr} className="rounded-xl" />
      </div>
      <div className="p-8">
        <GithubIcon url="https://github.com/Javier-Rivasseau/front-end-react-portfolio/tree/main/src/components/combined-project-list/qr-code-generator"/>
      </div>
    
    </div>
  );
};

export default QrCodeGenerator;
