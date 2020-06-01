import React, { useContext } from "react";
import { DrinksContext } from "../../context/drink-context";

const InventoryView = () => {
  const { store } = useContext(DrinksContext);

  const currentInventory = store.inventory;

  return (
    <div>
      <h2>Inventory (in Units)</h2>
      {Object.keys(currentInventory).map((ingredientInventory) => (
        <div>
          <div className="ingredient-inventory">{ingredientInventory} </div>:
          {currentInventory[ingredientInventory]}
        </div>
      ))}
    </div>
  );
};

export default InventoryView;
