export const ingredients = {
  COFFEE: "coffee",
  SUGAR: "sugar",
  CREAM: "cream",
  WHIPPED_CREAM: "whipped cream",
  ESPRESSO: "espresso",
  STEAMED_MILK: "steamed milk",
  FOAMED_MILK: "foamed milk",
  COCOA: "cocoa",
};

// Holds the ingredients per unit cost
const ingredientswithCost = {
  [ingredients.COFFEE]: 0.75,
  [ingredients.SUGAR]: 0.25,
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

// DATA STRUCTURES:

// const Ingridients = {
//     COFFEE: 'coffee',
// }
// const ingridientsWithCost = {
//     [Ingridients.COFFEE]: 123,
// }

// const addIngridient = (ingridientName, costPerUnit) => {
//     Ingridients[ingridientName.toUpperCase()] = ingridientName;
//     ingridientsWithCost[ingridientName.toUpperCase()] = costPerUnit;
// }

// const drinksConst = {
//     'COFFEE': 'coffee',
//     DECAF
// }

// const drinksList = {
//     [drinksConst.COFFEE]: {
//         Ingridients[COFFEE]: 3,
//         Ingridients[SUGAR]:1,
//         Ingridients[CREAM]: 1
//     },
//     [drinksConst.COFFEE]: {
//         Ingridients[COFFEE]: 3,
//         Ingridients[SUGAR]:1,
//         Ingridients[CREAM]: 1
//     },

// }
