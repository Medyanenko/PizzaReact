import React, { useEffect, useState } from "react";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Sort from "./components/Sort/Sort";
import "./scss/app.scss";


function App() {
  const [items, setItems] = useState([]);
 
useEffect(()=>{
  fetch("https://6324553abb2321cba929fab0.mockapi.io/items")
  .then((res) => res.json())
  .then((arr) => {
    setItems(arr);
  }); 
}, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піци</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
