export const ingredients = {
  COFFEE: "coffee",
  SUGAR: "sugar",
  CREAM: "cream",
  DECAF_COFFE: "decaf coffee",
  WHIPPED_CREAM: "whipped cream",
  ESPRESSO: "espresso",
  STEAMED_MILK: "steamed milk",
  FOAMED_MILK: "foamed milk",
  COCOA: "cocoa",
};

// Holds the ingredients per unit costi in dollars
const ingredientswithCost = {
  [ingredients.COFFEE]: 0.75,
  [ingredients.SUGAR]: 0.25,
  [ingredients.CREAM]: 0.25,
  [ingredients.WHIPPED_CREAM]: 0.25,
  [ingredients.ESPRESSO]: 0.45,
  [ingredients.STEAMED_MILK]: 0.35,
  [ingredients.FOAMED_MILK]: 0.35,
  [ingredients.COCOA]: 0.5,
  [ingredients.DECAF_COFFE]: 0.2,
};

/**
 * add one new ingredient
 * @param {string} ingredientName
 * @param {number} costPerUnit - optional but good to provide
 */
export const addNewIngredient = (ingredientName, costPerUnit) => {
  const upperCaseIngredient = ingredientName.toUpperCase();

  ingredients[upperCaseIngredient] = ingredientName;

  ingredientswithCost[upperCaseIngredient] =
    costPerUnit || ingredientswithCost[upperCaseIngredient];
};
