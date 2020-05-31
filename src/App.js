import React from "react";
import DrinkList from "./views/drinksList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Barista Matic</h2>
      </header>

      {<DrinkList />}
    </div>
  );
}

export default App;
