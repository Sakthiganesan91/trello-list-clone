import React from "react";
import { ItemProps } from "../types";

interface ListItemProps {
  item: ItemProps;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <div className="border border-2 my-2 rounded-2 p-2">
      <h6>{item.title}</h6>
    </div>
  );
};

export default ListItem;
