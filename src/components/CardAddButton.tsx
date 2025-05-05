import { Plus } from "lucide-react";
import { CardProps } from "../types";
import { useState } from "react";
const CardAddButton = (props: {
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
  cardName: string;
  cards: CardProps[];
  setCardName: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { setCards, cardName, cards, setCardName } = props;

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const cardAddHandler = () => {
    if (cards.find((card) => card.title === cardName)) {
      setError(true);
      setErrorMessage("Card Names cannot be Repeated");
      return;
    }
    if (cardName.length <= 0) {
      setError(true);
      setErrorMessage("Card Name is Empty");
      return;
    }

    setError(false);
    setErrorMessage("");
    const cardObj: CardProps = {
      id: cards.length + 1,
      title: cardName,
      items: [],
      countOfList: 0,
    };
    const updatedCardList = [...cards, cardObj];
    setCards(updatedCardList);

    setCardName("");
  };
  return (
    <>
      <div>
        <button
          className={
            "d-flex align-items-center gap-2 btn " +
            (!error ? "btn-primary" : "btn-danger")
          }
          onClick={cardAddHandler}
        >
          {!error ? (
            <>
              <div>Add</div>
              <div>
                <Plus />
              </div>
            </>
          ) : (
            errorMessage
          )}
        </button>
      </div>
    </>
  );
};

export default CardAddButton;
