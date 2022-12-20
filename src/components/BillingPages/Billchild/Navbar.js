import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function BackgroundColor() {
  return (
    <Grid >
      <Grid >
        <Box sx={{ bgcolor: '#F2F3F2', fontWeight:"bold", color: '#48494B', p: 2, mt:0, fontSize:20 }}>
          Create Bill
        </Box>
      </Grid>
    </Grid>
  );
}
