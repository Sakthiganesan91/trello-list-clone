import { CardProps, ItemProps } from "../types";
import Card from "./Card";

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
        return card;
      }

      if (card.id === previousCardId && previousCardId === cardId) {
        return card;
      }
      if (card.id === cardId) {
        card.items = [...card.items, item];
        return card;
      }
      return card;
    });

    setCards(updatedCartAfterDrop);
  };
  return (
    <>
      <div className="d-flex gap-2 align-items-start ">
        {cards.length > 0 &&
          cards.map((card) => (
            <div
              onDragOver={dragOverHandler}
              key={card.id}
              onDrop={(event) => onDropHandler(event, card.id)}
            >
              <Card card={card} setCards={setCards} cards={cards} />
            </div>
          ))}
      </div>
    </>
  );
};

export default CardList;
