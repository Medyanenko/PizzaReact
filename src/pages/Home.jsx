import React, { useState, useEffect } from "react";

import PizzaBlock from "./../components/PizzaBlock/PizzaBlock";
import Skeleton from "./../components/PizzaBlock/Skeleton";
import Sort from "./../components/Sort/Sort";
import Categories from "./../components/Categories/Categories";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://6324553abb2321cba929fab0.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
      window.scrollTo(0,0);
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
export default Home;
