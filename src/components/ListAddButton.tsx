import { Plus } from "lucide-react";
import { useState } from "react";
import { CardProps } from "../types";
import { v4 as uuidv4 } from "uuid";

const ListAddButton = (props: {
  listItemName: string;
  card: CardProps;
  cards: CardProps[];
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
  setListItemName: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { card, listItemName, setCards, cards, setListItemName } = props;
  const [error, setError] = useState<boolean>(false);

  const listAddHandler = () => {
    if (listItemName.length <= 0) {
      setError(true);

      return;
    }

    const cardId = card.id;

    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        card.items = [
          ...card.items,
          {
            id: uuidv4(),
            title: listItemName,
            cardId: card.id,
          },
        ];

        card.countOfList = card.items.length;

        return card;
      }
      return card;
    });

    setError(false);

    setCards(updatedCards);

    setListItemName("");
  };
  return (
    <div>
      <Plus color={!error ? "green" : "red"} onClick={listAddHandler} />
    </div>
  );
};

export default ListAddButton;
