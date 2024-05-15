import React, { useState } from "react";
import { MenuItemData } from "./data";
import MenuList from "./menu-list";
import { FaChevronDown, FaChevronCircleRight } from "react-icons/fa";

interface MenuItemProps {
  item: MenuItemData;
}
// interface DisplayItem {
//   [key: string]: boolean;
// }

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [currentDisplayItem, setCurrentDisplayItem] = useState<Record<string, boolean>>({});

  const handleToggleDisplayItem = (getCurrentLabel: string) => {
    setCurrentDisplayItem((prevState) => ({
      ...prevState,
      [getCurrentLabel]: !currentDisplayItem[getCurrentLabel],
    }));
    console.log(currentDisplayItem);
  };

  return (
    <li className="mb-2 font-bold text-xl   ">
      <div className="flex items-center space-x-2">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span
            className="mr-2 cursor-pointer transition-transform duration-300 "
            onClick={() => handleToggleDisplayItem(item.label)}
          >
            {currentDisplayItem[item.label] ? (
              <FaChevronDown className="text-blue-400" size={25} />
            ) : (
              <FaChevronCircleRight className="text-blue-600" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length &&
      currentDisplayItem[item.label] ? (
        <ul className="ml-4 pt-2">
          <MenuList list={item.children} />
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
