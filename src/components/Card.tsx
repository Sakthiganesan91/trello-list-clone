import React, { useState } from "react";
import { CardProps } from "../types";

import ListAddButton from "./ListAddButton";
import List from "./List";

interface CardProp {
  card: CardProps;
  cards: CardProps[];
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
}
const Card: React.FC<CardProp> = ({ card, setCards, cards }) => {
  const [listItemName, setListItemName] = useState<string>("");
  return (
    <div
      style={{
        cursor: "pointer",
      }}
      className="focus-ring px-2 border rounded-2 "
    >
      <div className="d-flex align-items-center gap-4 my-2">
        <p className="card-title h6 fw-bold ">{card.title}</p>
        <p className="fw-bold my-2">{card.countOfList}</p>
        <ListAddButton
          cards={cards}
          listItemName={listItemName}
          setListItemName={setListItemName}
          card={card}
          setCards={setCards}
        />
      </div>
      <input
        type="text"
        name=""
        id=""
        value={listItemName}
        onChange={(e) => {
          setListItemName(e.target.value);
        }}
      />
      {card.items.length === 0 && <div className="my-5"></div>}
      <List lists={card.items} />
    </div>
  );
};

export default Card;
