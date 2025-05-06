import { ItemProps } from "../types";
import { FixedSizeList as ListCol } from "react-window";
//import AutoSizer from "react-virtualized-auto-sizer";

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
      <ListCol
        height={250}
        itemCount={lists.length}
        itemData={lists}
        itemSize={50}
        width={200}
      >
        {({ index, style }) => (
          <div
            style={style}
            draggable
            onDragStart={(event) => onDragStartHandler(event, lists[index])}
            key={lists[index].id}
          >
            <ListItem item={lists[index]} key={lists[index].id} />
          </div>
        )}
      </ListCol>
    </>
  );
};

export default List;
