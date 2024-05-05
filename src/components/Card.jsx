import { useState, useEffect } from "react";

export default function Card({ id }) {
  const [picture, setPicture] = useState("Loading...");

  useEffect(() => {
    const animalArr = [
      "dog",
      "cat",
      "pig",
      "horse",
      "sheep",
      "cow",
      "chicken",
      "frog",
      "duck",
      "mouse",
      "llama",
      "ox",
    ];
    const fetchData = async () => {
      let result = `https://api.giphy.com/v1/gifs/translate?api_key=VXQO4CocYmg03DHvfXyuUjLEzF2dujf6&s=${
        animalArr[id - 1]
      }`;
      try {
        const response = await fetch(result, { mode: "cors" });
        const gifData = await response.json();
        setPicture(<img id={id} src={`${gifData.data.images.original.url}`} />);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return <>{picture}</>;
}
