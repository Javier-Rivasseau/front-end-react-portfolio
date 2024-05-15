import React from "react";
import MenuItem from "./menu-item";
import { MenuItemData } from "./data";

interface MenuListProps {
  list: MenuItemData[];
}

const MenuList: React.FC<MenuListProps> = ({ list }) => {
  return (
    <ul className="list-none pt-4">
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem key={listItem.label} item={listItem} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
