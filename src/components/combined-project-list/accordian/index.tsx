import React, { useState, FC } from "react";
import data from "./data";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

interface DataItem {
  id: string;
  question: string;
  answer: string;
}

const Accordion: FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  const handleSingleSelection = (getCurrentId: string): void => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId: string): void => {
    if (multiple.includes(getCurrentId)) {
      setMultiple(multiple.filter((id) => id !== getCurrentId));
    } else {
      setMultiple([...multiple, getCurrentId]);
    }
  };

  return (
    <div className="flex flex-col mt-10 justify-center items-center ">
      <ProjectSeparator title="ACCORDION" />

      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="bg-blue-500 border-2 text-xl border-gray-400 px-1 py-2 rounded-md text-white font-bold hover:bg-blue-600"
      >
        {enableMultiSelection
          ? "Disable MultiSelection"
          : "Enable MultiSelection"}{" "}
      </button>
      <div className="px-6 w-5/6 md:w-1/2">
        {data && data.length ? (
          data.map((dataItem: DataItem) => (
            <div className="bg-blue-500 mb-2 px-2 py-4" key={dataItem.id}>
              <div
                className="text-white font-sans font-bold justify-between items-center flex cursor-pointer"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id || multiple.includes(dataItem.id) ? (
                <div className="text-black h-auto"> {dataItem.answer} </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
      <div className="p-8">
        <GithubIcon url=""/>
      </div>
    </div>
  );
};

export default Accordion;
