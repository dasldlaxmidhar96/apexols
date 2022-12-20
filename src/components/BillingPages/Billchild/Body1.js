import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

export default function BackgroundColor() {
  return (
    <Grid >
      <Grid >
        <Box sx={{ bgcolor: '#F2F3F2',  color: '#48494B', pt: 2, m:1, height:"19vh" }}>
          <span className='marg'>Doctor: TV Raja</span>
          <span className='marg'>Date/Time: 20/12/2022</span>
          <span className='marg'>07:00 PM</span>
          <span className='marg'>Shardul Kale/1942/25 YRS</span>
          <span className='marg only1'>Registered</span>
          <Button sx={{ bgcolor:"#63C5DA", color:"aliceblue",ml:"10px", mb:1 }}>Edit</Button>
          <Box sx={{ ml:"20px", mt:"15px" }}>
            <span>Referred By:</span>
            <select>
                <option>- Select -</option>
                <option></option>
                <option></option>
                <option></option>
            </select>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
