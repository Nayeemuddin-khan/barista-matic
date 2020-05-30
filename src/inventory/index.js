import { ingredients } from "../ingredients";

// holds the inventory of ingredients with availability count (in units) - initialising to random valuess
export const inventory = {
  [ingredients.COFFEE]: 130,
  [ingredients.SUGAR]: 120,
  [ingredients.COCOA]: 100,
  [ingredients.CREAM]: 90,
  [ingredients.ESPRESSO]: 80,
  [ingredients.FOAMED_MILK]: 70,
  [ingredients.STEAMED_MILK]: 60,
  [ingredients.WHIPPED_CREAM]: 50,
};

/**
 * add or update the ingredient quantity
 * @param {string} ingredientName
 * @param {number} quantity
 */
export const updateInventory = (ingredientName, quantity) => {
  inventory[ingredientName.toUpperCase()] = quantity;
};
