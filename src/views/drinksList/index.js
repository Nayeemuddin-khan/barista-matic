import React, { useContext } from "react";
import { DrinksContext } from "../../context/drink-context";
import DrinkCard from "../../components/drinkcard";

const DrinkList = ({ drinks }) => {
  const { store } = useContext(DrinksContext);

  return (
    <div className="drinks-container">
      {store.drinksWithIngredients.map((drink) => (
        <DrinkCard drinkIngredients={drink} />
      ))}
    </div>
  );
};

export default DrinkList;
