import { useState } from "react";
import shuffle from "../functions/shuffle";
import Card from "./Card";

export default function Board() {
  const arr = [];
  for (let i = 0; i < 12; i += 1) {
    arr.push(<Card id={i} key={i} />);
  }
  const [cards, setCards] = useState(arr);
  function handleClick() {
    const newCards = [...cards];
    shuffle(newCards);
    setCards(newCards);
  }
  return (
    <div className="board">
      {cards.map((e) => (
        <div className="card" onClick={handleClick} key={e.key}>
          {e}
        </div>
      ))}
    </div>
  );
}
