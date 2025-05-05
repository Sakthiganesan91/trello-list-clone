import { CardProps, ItemProps } from "../types";
import Card from "./Card";
import { FixedSizeList as List } from "react-window";
interface CardListProp {
  cards: CardProps[];
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

const CardList = ({ cards, setCards }: CardListProp) => {
  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropHandler = (
    event: React.DragEvent<HTMLElement>,
    cardId: string
  ): void => {
    let item: ItemProps = JSON.parse(event.dataTransfer.getData("item"));

    const previousCardId = item.cardId;

    item.cardId = cardId;

    const updatedCartAfterDrop = cards.map((card) => {
      if (card.id === previousCardId && card.id !== cardId) {
        card.items = card.items.filter((i) => item.id !== i.id);
        card.countOfList -= 1;
        return card;
      }

      if (card.id === previousCardId && previousCardId === cardId) {
        return card;
      }
      if (card.id === cardId) {
        card.items = [...card.items, item];
        card.countOfList = card.items.length;
        return card;
      }
      return card;
    });

    setCards(updatedCartAfterDrop);
  };
  return (
    <List
      height={500}
      itemCount={cards.length}
      itemData={cards}
      itemSize={210}
      width={1000}
      layout="horizontal"
    >
      {({ index, style }) => (
        <div
          style={style}
          onDragOver={dragOverHandler}
          key={cards[index].id}
          onDrop={(event) => onDropHandler(event, cards[index].id)}
        >
          <Card card={cards[index]} setCards={setCards} cards={cards} />
        </div>
      )}
    </List>
  );
};

export default CardList;
