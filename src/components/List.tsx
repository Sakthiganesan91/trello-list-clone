import { ItemProps } from "../types";

import ListItem from "./ListItem";

interface ListProp {
  lists: ItemProps[];
}
const List = ({ lists }: ListProp) => {
  const onDragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    item: ItemProps
  ): void => {
    event.dataTransfer.setData("item", JSON.stringify(item));
  };
  return (
    <>
      <div className="">
        {lists.length > 0 &&
          lists.map((item) => (
            <div
              draggable
              onDragStart={(event) => onDragStartHandler(event, item)}
            >
              <ListItem item={item} key={item.id} />
            </div>
          ))}
      </div>
    </>
  );
};

export default List;
