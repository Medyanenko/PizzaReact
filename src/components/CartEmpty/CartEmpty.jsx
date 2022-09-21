import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div>
      <div className="cart cart--empty">
        <h2>
          Корзина пуста як і Ваш шлунок 😕
        </h2>
        <p>
          Ви досі не додали жодної піци
          <br />
          Терміново поверніться на головну сторінку
        </p>
        <img src="/img/empty-cart.svg" alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Повернутися назад</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
