import { useState } from "react";
import shuffle from "../functions/shuffle";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";

export default function Board() {
  const cardArr = [];
  for (let i = 1; i < 13; i += 1) {
    cardArr.push(<Card id={i} key={i} />);
  }
  const [cards, setCards] = useState(cardArr);
  const [clicked, setClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);

  function checkScore(id) {
    if (clicked.includes(id)) {
      setCurrentScore(0);
      setClicked([]);
    } else {
      setClicked([...clicked, id]);
      setCurrentScore(currentScore + 1);
    }
  }

  function handleClick(e) {
    const newCards = [...cards];
    shuffle(newCards);
    setCards(newCards);
    checkScore(e.target.id);
  }

  return (
    <div className="board">
      <div className="score">
        <ScoreBoard updatedScore={currentScore} />
      </div>
      <div className="cards">
        {cards.map((e) => (
          <div className="card" id={e.key} onClick={handleClick} key={e.key}>
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
