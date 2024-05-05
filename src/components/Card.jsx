import { useState, useEffect } from "react";

export default function Card({ id }) {
  const [picture, setPicture] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      let result = `https://api.giphy.com/v1/gifs/translate?api_key=VXQO4CocYmg03DHvfXyuUjLEzF2dujf6&s=${id}`;
      try {
        const response = await fetch(result, { mode: "cors" });
        const gifData = await response.json();
        setPicture(<img src={`${gifData.data.images.original.url}`} />);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return <>{picture}</>;
}
