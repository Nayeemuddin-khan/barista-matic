import React, { useState, useContext } from "react";
import { DrinksContext } from "../../context/drink-context";
import { ACTIONS } from "../../context/drink-provider";
import { ingredientsWithCost } from "../../ingredients";
import { costPerDrink, isDrinkAvailableToDispense } from "../../utils";

const DrinkCard = ({ drink }) => {
  const [isDrinkDetails, setDrinkCard] = useState(false); // show drink name or drink details card

  const { dispatch } = useContext(DrinksContext);

  const displayIngredients = Object.keys(drink.ingredients).map(
    (ingredientName) => {
      return (
        <div className="ingredient">
          {ingredientName} : {drink.ingredients[ingredientName]}
        </div>
      );
    }
  );

  const cardClasses = `drink-card ${isDrinkDetails ? "flip" : ""}`;

  return (
    <div className={cardClasses} onClick={() => setDrinkCard(!isDrinkDetails)}>
      <h3> {drink.name} </h3>
      {isDrinkDetails ? (
        <>
          <div>$ {costPerDrink(drink.ingredients)}</div>
          <button
            disabled={!isDrinkAvailableToDispense(drink)}
            onClick={() => {
              dispatch({
                type: ACTIONS.DISPENSE_DRINK,
                payload: {
                  drinkName: drink.name,
                },
              });
            }}
            className="button dispence"
          >
            Dispense
          </button>
        </>
      ) : (
        displayIngredients
      )}
    </div>
  );
};

export default DrinkCard;
