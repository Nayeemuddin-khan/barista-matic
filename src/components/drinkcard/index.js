import React, { useState, useContext } from "react";
import { DrinksContext } from "../../context/drink-context";
import { ACTIONS } from "../../context/drink-provider";

const DrinkCard = ({ drinkIngredients, costPerDrink }) => {
  const [isDrinkDetails, setDrinkCard] = useState(false); // show drink name or drink details card

  const { dispatch } = useContext(DrinksContext);

  const displayIngredients = Object.keys(drinkIngredients.ingredients).map(
    (ingredientName) => {
      return (
        <ul className="ingredient-container">
          {ingredientName} : {drinkIngredients.ingredients[ingredientName]}
        </ul>
      );
    }
  );

  return (
    <div onClick={() => setDrinkCard(!isDrinkDetails)}>
      <h3> {drinkIngredients.name} </h3>
      {isDrinkDetails ? (
        <>
          <div>{costPerDrink}</div>
          <button
            onClick={() => {
              dispatch({
                type: ACTIONS.DISPENSE_DRINK,
                payload: {
                  drinkName: drinkIngredients.name,
                },
              });
            }}
            className="button dispence"
          >
            Dispense
          </button>
        </>
      ) : (
        <>{displayIngredients}</>
      )}
    </div>
  );
};

export default DrinkCard;
