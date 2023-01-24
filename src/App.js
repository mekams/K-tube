import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';  // {browser router as Router} can also be used
import { Box } from '@mui/material';

 //index.js  allows imports to write in single file present component folder
import {Feed,Navbar, VideoDetail, ChannelDetail, SearchFeed} from './components';


const App = () => {
  return (
    <BrowserRouter>
      
      {/*Fetching layout box from material ui with prop sx */}
      <Box sx={{backgroundColor: '#000'}}>  
       <Navbar/>
      <Routes>
        {/* created route to visit to specific components */}
        <Route path = '/' exact element={<Feed/>}/>
        <Route path = '/video/:id' element={<VideoDetail/>}/>
        <Route path = '/channel/:id' element={<ChannelDetail/>}/>
        <Route path = '/search/:serachTerm' element={<SearchFeed/>}/>
      </Routes>
      </Box>

    </BrowserRouter>
  )
}

export default App
