import { useState } from "react";

import { CardProps } from "./types";
import CardList from "./components/CardList";
import CardAddButton from "./components/CardAddButton";

function App() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [cardName, setCardName] = useState<string>("");
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex gap-2 align-items-start overflow-scroll">
          <CardList cards={cards} setCards={setCards} />

          <input
            type="text"
            name=""
            id=""
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
        </div>
      </div>
    </>
  );
}

export default App;
