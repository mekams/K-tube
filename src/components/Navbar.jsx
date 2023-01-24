import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Searchbar from "./SearchBar";

import logo from "../exported_utils/youtube.png";   //logo

const Navbar = () => {
  return (
    //laying the items and setting navbar background
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      {/* imported logo  is set to '/' */}
      <Link to="/" style={{ display: "flex", aligntems: "center" }}>
        <img src={logo} alt="logo" height={45}></img>
      </Link>
      <Searchbar/>
    </Stack>
  );
};

export default Navbar;
