import React, { useState } from "react";

const DrinkCard = ({ drinkName, drinkIngredients, costPerDrink }) => {
  const [isDrinkDetails, setDrinkCard] = useState(false); // show drink name or drink details card

  const displayIngredients = Object.keys(drinkIngredients).map(
    (ingredientName) => {
      return (
        <ul className="ingredient-container">
          {ingredientName} : {drinkIngredients[ingredientName]}
        </ul>
      );
    }
  );

  return (
    <div onClick={() => setDrinkCard(!isDrinkDetails)}>
      <h3> {drinkName} </h3>
      {isDrinkDetails ? (
        <>{displayIngredients}}</>
      ) : (
        <>
          <div>{costPerDrink}</div>
          <button onClick={() => {}} className="button dispence">
            Dispense
          </button>
        </>
      )}
    </div>
  );
};
