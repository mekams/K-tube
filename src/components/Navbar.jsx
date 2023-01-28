import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../utility/youtube.png";
//importing component on which this interface code dependent
import { SearchBar } from "./";

const Navbar = () => (
  //laying the items and setting navbar background (immediate return)
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
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />{" "}
      {/* <h1 style={{color:"white",margin:"-5px 0px 0px 10px", fontSize:"5rem"}}>K-tube</h1> */}
      <Box
        sx={{
          color: "#FfFF",
          border: "none",
          fontSize: "2.5rem",
          fontFamily:"cursive",
          margin: "0px 1px 0px 10px",
        }}
      >                
        K-tube    
      </Box>
    </Link>

    {/* SearchBar components is split */}
    <SearchBar />
  </Stack>
);

export default Navbar;
