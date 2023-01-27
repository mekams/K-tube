import React, { useState, useEffect } from "react";

// useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

//reused here below for channelcard & videos
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utility/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
  // console.log(channelDetail)

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
      {/* https://cssgradient.io/ */}
        <div style={{
          height:'300px',
          background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,177,1) 47%, rgba(252,176,69,1) 100%)",
          zIndex: 10,
        }} />

        {/* marginTop passed as props to style & settle the card of channel on place */}
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>

      {/* Video component reused to display channel videos  */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
