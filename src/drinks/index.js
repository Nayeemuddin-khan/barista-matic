import { ingredients, addNewIngredient } from "../ingredients";

const drinks = {
  COFFEE: "coffee",
  DECAF_COFFEE: "decaf coffee",
  CAFFE_LATTE: "caffe latte",
  CAFFE_AMERICANO: "Caffe Americano",
};

export const drinksWithIngredients = [
  {
    name: drinks.COFFEE,
    ingredients: {
      [ingredients.COFFEE]: 3,
      [ingredients.SUGAR]: 1,
      [ingredients.CREAM]: 1,
    },
  },
  {},
];

/**
 *
 * @param {string} drinkName
 * @param {object} ingredientsListWithQuantity - { 'coffee' : 4, sugar: 1 }
 */
export const addNewDrink = (drinkName, ingredientsListWithQuantity) => {
  const upperCaseDrinkName = drinkName.toUpperCase();

  drinks[upperCaseDrinkName] = drinkName;

  // ingredientsList
  // add the any new ingredient to ingredient list
  const listOfIngredients = Object.keys(ingredientsListWithQuantity);

  listOfIngredients.forEach((ingredientName) => {
    addNewIngredient(ingredientName.toUpperCase()); // Initalising to zero cost.
  });

  // convert ingredient names to uppercase
  const uppercasedQuantity = listOfIngredients.reduce(
    (prev, ingredientName) => {
      return {
        ...prev,
        [ingredientName.toUpperCase()]: ingredientsListWithQuantity[
          ingredientName
        ],
      };
    }
  );

  // add the ingredientList to drinksWithIngredients
  drinksWithIngredients.push({
    name: drinkName.toUpperCase(),
    ingredients: uppercasedQuantity,
  });
};
