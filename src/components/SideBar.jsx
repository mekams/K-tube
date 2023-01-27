import React from "react";
import { Stack } from "@mui/material";

//imported categories for youtube sidebar
import { categories } from "../utility/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  // stack direction is columnn by default but set to row for small devices like smartphones
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {/* using map function importing the name & icons object stored in constants.js file(exported_Utils) */}
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        //Each property requires a key whenever using map in react----------- contd...further
        // key={category.name}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
