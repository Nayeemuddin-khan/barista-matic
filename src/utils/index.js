import { ingredientsWithCost } from "../ingredients";
import { inventory } from "../inventory";

export const costPerDrink = (ingredients) => {
  return Object.keys(ingredients)
    .reduce(
      (sum, ingredientName) =>
        ingredients[ingredientName] * ingredientsWithCost[ingredientName] + sum,
      0
    )
    .toFixed(2);
};

export const isDrinkAvailableToDispense = (drink) => {
  return Object.keys(drink.ingredients).every(
    (ingredient) => inventory[ingredient] >= drink.ingredients[ingredient]
  );
};
