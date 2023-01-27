import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

//Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.
const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
