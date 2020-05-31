import React from "react";
import DrinkList from "../drinksList";
import InventoryView from "../inventory";

const Home = () => {
  return (
    <div className="home">
      <DrinkList />
      <InventoryView />
    </div>
  );
};

export default Home;
