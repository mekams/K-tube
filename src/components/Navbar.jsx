import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

//importing component on which this interface code dependent
import Searchbar from "./SearchBar";                  

import logo from "../exported_utils/youtube.png";   //logo
// import { Margin } from "@mui/icons-material";

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
        <img src={logo} alt="logo" height={45}></img> {/*  <h1 style={{color:"white",margin:"-5px 0px 0px 10px", fontSize:"5rem"}}>K-tube</h1> */}
      </Link>

      {/* SearchBar components is split */}
      <Searchbar/>
    </Stack>
  );
};

export default Navbar;
