import React from "react";
import style from "./Category.module.css";

const Category = ({ functionFilter, categories }) => {
  return (
    <div className={style["category__section"]}>
      {/* <button
        onClick={() => {
          functionFilter("Main Course");
        }}
      >
        Main Course
      </button>{" "} */}
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => {
              functionFilter(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
