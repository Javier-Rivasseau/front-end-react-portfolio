import React, { useState, FC } from "react";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

const RandomColorGenerator: FC = () => {
  const [typeOfColor, setTypeOfColor] = useState<string>("hex");
  const [color, setColor] = useState<string>("#000000");

  const utilityHexFunction = (arrayLength: number): number => {
    const randomNumber = Math.floor(Math.random() * arrayLength);
    return randomNumber;
  };

  const handleCreateRandomHexColor = () => {
    const hex: (number | string)[] = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let newColor: string = "#";
    for (let i = 0; i < 6; i++) {
      newColor += hex[utilityHexFunction(hex.length)];
    }
    setColor(newColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = String(Math.floor(Math.random() * 256));
    const g = String(Math.floor(Math.random() * 256));
    const b = String(Math.floor(Math.random() * 256));
    let rgb: string = `rgb(${r},${g},${b})`;

    setColor(rgb);
  };

  //   useEffect(() => {
  //     if (typeOfColor === 'rgb') {
  //       handleCreateRandomRgbColor();
  //     } else {
  //       handleCreateRandomHexColor();
  //     }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div > <ProjectSeparator title="RANDOM COLOR GENERATOR"/></div>
      
      <div className="flex justify-center items-center space-x-2 pt-2">
        <button
          onClick={() => setTypeOfColor("hex")}
          className="border-sm p-2 rounded-md border border-white text-white font-bold bg-pink-500"
        >
          Create Hex Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="border-sm p-2 rounded-md border border-white text-white font-bold bg-pink-500"
        >
          Create RGB Color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          className="border-sm p-2 rounded-md border border-white text-white font-bold bg-pink-500"
        >
          Generate Random Color
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-12 gap-10">
        <h3 className="text-white font-bold text-5xl">
          {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
        </h3>
        <h1 className="text-white font-bold text-5xl">{color}</h1>
      </div>
      <div className="p-8">
        <GithubIcon url=""/>
      </div>
    
    </div>
  );
};

export default RandomColorGenerator;
