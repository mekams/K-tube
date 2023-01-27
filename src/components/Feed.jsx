import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utility/fetchFromAPI";

//importing component on which this interface code dependent
import { Videos, Sidebar } from "./";

const Feed = () => {
  //dynamic change of sidebar buttons on click
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  // Fetch the api_data right after component renders initially  & dependency array manages to re-renders when categories interchanged

  useEffect(() => {
    setVideos(null);

    //api has base_url+ search query : Whenever user changes categories it got search by line 16 ${selectedCategory}
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      //promise returning data as it's async
      .then((data) => setVideos(data.items));
    // console.log(data); //analyse api data received
  }, [selectedCategory]);

  return (
    //stack direction is columnn by default but set to row for medium devices like laptops which  makes it responsive
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        {/* sidebar components is split */}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* //standardized the text and its related CSS properties without worrying about browser compatibility issues */}
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          &#60; / &#62;❤️ Kamran Mustafa &copy; copyright 2022-23😃
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        {/* Videos components is split */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
