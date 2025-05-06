import { useState } from "react";

import { CardProps } from "./types";
import CardList from "./components/CardList";
import CardAddButton from "./components/CardAddButton";

function App() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [cardName, setCardName] = useState<string>("");
  return (
    <>
      <div className="container-fluid my-2">
        <div className="d-flex gap-2 align-items-start">
          <input
            type="text"
            name="cardName"
            id="cardName"
            placeholder="Card Name"
            value={cardName}
            onChange={(event) => {
              setCardName(event.target.value);
            }}
          />
          <CardAddButton
            setCards={setCards}
            cardName={cardName}
            setCardName={setCardName}
            cards={cards}
          />
          <CardList cards={cards} setCards={setCards} />
        </div>
      </div>
    </>
  );
}

export default App;
