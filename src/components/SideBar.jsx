import { Stack } from "@mui/material";
import { categories } from "../exported_utils/constants"; //imported categories for youtube sidebar

const selectedCategory = "New"; //can also define same in betwwen line18 and 19

const SideBar = () => {
  return (
    // Flex of sidebar is created , direction is row by default and changes in medium devices to column
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {/* using map function importing the name & icons object stored in constants.js file(exported_Utils) */}
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "#Fc1503",
              color: "white",
            }}
            //Each property requires a key whenever using map in react----------- contd...further
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
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
