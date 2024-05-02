import { useState } from "react";

export default function ScoreBoard({ updatedScore }) {
  const [highScore, setHighScore] = useState(0);

  if (updatedScore) {
    if (updatedScore > highScore) setHighScore(updatedScore);
  }

  return (
    <>
      <div>Current Score: {updatedScore}</div>
      <div>High Score: {highScore}</div>
    </>
  );
}
