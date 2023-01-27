import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    //reload disabled
    e.preventDefault();

    if (searchTerm) {
      //navigate to the searchterm
      navigate(`/search/${searchTerm}`);

      //makes again empty once search populated
      setSearchTerm("");
    }
  };

  return (
    //just like plain white sheet
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        //search bar
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* //icon & search */}
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
