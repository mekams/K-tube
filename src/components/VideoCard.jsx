import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoProfilePicture,
} from "../exported_utils/constants"; //in case of missing data  this will render
// destructuring the data received
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  //   console.log(videoId, snippet);
  return (
    // card for displaying video objects created
    <Card sx={{width:{md:320, xs:"100%"},
    boxShadow:'none',borderRadius:0}}>
    {/* displaying card with setting dimensions */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: 106 }}>
        {/* for video title texts  */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link> 
        {/* for  channnel texts  */}
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle?.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
              <CheckCircle sx={{fontSize:12, color:"gray", ml:"5px"}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
