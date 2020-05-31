import React, { useContext } from "react";
import { DrinksContext } from "../../context/drink-context";

const InventoryView = () => {
  const { store } = useContext(DrinksContext);

  const currentInventory = store.inventory;

  return (
    <div>
      <h2>inventory</h2>
      {Object.keys(currentInventory).map((ingredientInventory) => (
        <div>
          {ingredientInventory}: {currentInventory[ingredientInventory]} Units
        </div>
      ))}
    </div>
  );
};

export default InventoryView;
