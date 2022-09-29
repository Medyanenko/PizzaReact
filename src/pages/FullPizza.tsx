import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://6324553abb2321cba929fab0.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        console.error("don't have the pizza");
        navigate("/");
      }
    }
    fetchPizza();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!pizza) {
    return <>"Loading...";</>;
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} грн</h4>
      <Link to="/" className="button button--outline button--add go-back-btn">
        <span>Назад</span>
      </Link>
    </div>
  );
};

export default FullPizza;
