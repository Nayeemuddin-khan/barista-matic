import React, { useReducer } from "react";
import { DrinksContext } from "./drink-context";
import { inventory, updateInventory } from "../inventory";
import { ingredientsWithCost, addNewIngredient } from "../ingredients";
import { drinksWithIngredients, addNewDrink } from "../drinks";

export const ACTIONS = {
  ADD_NEW_INGREDIENTS: "ADD_NEW_INGREDIENTS",
  ADD_NEW_DRINKS: "ADD_NEW_DRINKS",
  UPDATE_INVENTORY: "UPDATE_INVENTORY",
  DISPENSE_DRINK: "DISPENSE_DRINK",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DISPENSE_DRINK:
      const { drinkName } = action.payload;

      // get each ingredient used for the drink to be served
      const { ingredients } = drinksWithIngredients.find(
        (drink) => drink.name === drinkName
      );

      // get the new quantity available in the inventory
      const ingredientsWithUpdateQuantity = {};
      Object.keys(ingredients).forEach((intName) => {
        ingredientsWithUpdateQuantity[intName] =
          inventory[intName] - ingredients[intName];
      });

      return {
        ...state,
        inventory: {
          ...state.inventory,
          ...ingredientsWithUpdateQuantity,
        },
      };
      break;
    case ACTIONS.UPDATE_INVENTORY:
      const { ingredientName, newQuantity } = action.payload;

      updateInventory(ingredientName, newQuantity);

      return {
        ...state,
        inventory: {
          ...state.inventory,
          [ingredientName]: newQuantity,
        },
      };

    case ACTIONS.ADD_NEW_DRINKS:
      const { drinkname, ingredientsListWithQuantity } = action.payload;

      addNewDrink(drinkname, ingredientsListWithQuantity); // updates the private variables inside the drinks folder

      return {
        ...state,
        drinksWithIngredients: [
          ...drinksWithIngredients,
          { name: drinkname, ingredientsListWithQuantity },
        ],
      };

    case ACTIONS.ADD_NEW_INGREDIENTS:
      const { ingredientName: name, costPerUnit } = action.payload;

      addNewIngredient(name, costPerUnit);

      return {
        ...state,
        ingredientsWithCost: {
          ...state.ingredientsWithCost,
          [ingredientName]: costPerUnit,
        },
      };

    default:
      return state;
  }
};

const initialState = {
  inventory,
  ingredientsWithCost,
  drinksWithIngredients,
};

export const DrinkProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const value = { store, dispatch };

  return (
    <DrinksContext.Provider value={value}>{children}</DrinksContext.Provider>
  );
};
