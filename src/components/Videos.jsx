import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

// received props fom feed component.
const Videos = ({ videos, direction }) => {
  console.log(videos)
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    {/* mapping videos with idx=index , data received as props */}
      {videos.map((item, idx) => (
        <Box key={idx}>
        {/* components split VideoCard and ChannelCard */}
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
