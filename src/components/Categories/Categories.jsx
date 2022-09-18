import React from "react";

const Categories = ({value, onChangeCategory}) => {

  const categories = [
    "Всі",
    "М'ясні",
    "Вегетаріанські",
    "Гриль",
    "Гострі",
    "Закриті",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, id) => (
          <li key={id}
            onClick={() => onChangeCategory(id)}
            className={value === id ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
