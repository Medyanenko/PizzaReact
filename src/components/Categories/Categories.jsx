import React from "react";
import { useState } from "react";

const Categories = () => {
  const [activeCategories, setActiveCategories] = useState(0);
  const categories = [
    "Всі",
    "М'ясні",
    "Вегетаріанські",
    "Гриль",
    "Гострі",
    "Закриті",
  ];
  const onClickCategory = (id) => {
    setActiveCategories(id);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, id) => (
          <li key={id}
            onClick={() => onClickCategory(id)}
            className={activeCategories === id ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
