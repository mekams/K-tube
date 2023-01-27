import React from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import  {Paper, IconButton} from '@mui/material'
import { Search } from '@mui/icons-material';

const Searchbar = () => {
  return (

   <Paper                                       //just like plain white sheet
   component="form"
   onSubmit={()=>{}}
   sx={{
        borderRadius:20,                        //styling props
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr: { sm: 5 }
   }}>

    <input                                      //search bar
    className='search-bar'
    placeholder='Search...'
    value=""
    onChange={()=>{}}    
    />

    <IconButton                                    //icon & search
    type ="submit"
    sx={{p:'10px',color:'red'}}>
        <Search/>                               
    </IconButton>
    
   </Paper>
  )
}

export default Searchbar
