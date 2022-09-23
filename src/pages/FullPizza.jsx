import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const FullPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://6324553abb2321cba929fab0.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        console.error("don't have the pizza");
        navigate("/")
      }
    }
    fetchPizza();
  }, []);
  if (!pizza) {
    return "Loading...";
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} грн</h4>
    </div>
  );
};

export default FullPizza;
