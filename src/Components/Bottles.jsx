import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Watch/Watch.css";
import { addToLS, getStoredCard } from "./localStorage";
import { Cart } from "./Watch/Cart";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCard = (bottle) => {
    console.log(bottle);
    const newCard = [...card, bottle];
    setCard(newCard);
    addToLS(bottle.id);
  };

  //  load card from localStorage
  useEffect(() => {
    console.log("call the useEffect", bottles.length);
    // const storedCard = getStoredCard()
    // console.log(storedCard)
    if (bottles.length > 0) {
      const storedCard = getStoredCard();
      console.log(storedCard, bottles);
      const saveCard = [];
      for (const id of storedCard) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          saveCard.push(bottle);
        }
      }
      console.log("save card", saveCard);
      setCard(saveCard);
    }
  }, [bottles]);

  return (
    <div>
      <h2>Bottles Here:{bottles.length}</h2>
      <Cart card={card} />
      <div className="flex">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCard={handleAddToCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
