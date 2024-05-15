import React from "react";
import MenuList from "./menu-list";
import { MenuItemData } from "./data";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

interface TreeViewProps {
  menus: MenuItemData[];
}

const TreeView: React.FC<TreeViewProps> = ({ menus }) => {
  return (
    <div className=" ">
      <div className="flex flex-col -mt-3 md:mt-0 ">
        <div className="w-full">
          <ProjectSeparator title="TREE VIEW" />
        </div>
        <div className="border border-gray-300">
          {" "}
          <div className="bg-gray-300  px-4 w-64 h-[60vh] overflow-auto">
            <MenuList list={menus} />
          </div>
        </div>
      </div>
      <div className="p-8">
        <GithubIcon url="" />
      </div>
    </div>
  );
};

export default TreeView;
