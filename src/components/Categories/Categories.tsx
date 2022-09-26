import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: any;
}

const Categories: React.FC<CategoriesProps> = ({value, onChangeCategory}) => {

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
