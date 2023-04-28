import React from "react";
import category from "./categoryIcons";

const Category = ({ selectedCategory, setSelectedCategory }) => {
  // function change
  const change = (str) => {
    setSelectedCategory(str.name);
  };

  return (
    <div className="category__header">
      {category.map((item) => {
        return (
          <React.Fragment key={item.name}>
            <button
              className="category__btn"
              onClick={() => change(item)}
              style={{
                backgroundColor:
                  item.name == selectedCategory && "rgb(40, 40, 40)",
                color: item.name == selectedCategory && "#ffff",
              }}
            >
              <span>{item.icon}</span>
              <span style={{ marginLeft: "6px" }}>{item.name}</span>
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Category;
