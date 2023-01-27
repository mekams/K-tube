import React from "react";

import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

// received props fom feed component.
const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {/* mapping videos with idx=index , data received as props */}
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* components split VideoCard and ChannelCard */}
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
