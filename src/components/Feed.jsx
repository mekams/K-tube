import { Stack, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";

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
        Sidebar
      </Box>
    </Stack>
  );
};

export default Feed;
