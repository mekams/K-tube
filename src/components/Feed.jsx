import { Stack, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import SideBar from "./SideBar";                      //importing component on which this interface code dependent

const Feed = () => {
  return (
    //stack used to cover area in rows when on laptops and when small /medium devices  it will be  column which  makes it responsive
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        {/* sidebar components is split */}
        <SideBar />
        
        {/* //standardized the text and its related CSS properties without worrying about browser compatibility issues */}
        <Typography
          claasName="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          &#60; / &#62;❤️ Kamran Mustafa &copy; copyright 2022-23😃
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
