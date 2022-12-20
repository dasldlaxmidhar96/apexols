import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BillingItems2 from "./BillingItems2"

export default function BackgroundColor() {
  return (
    <Grid >
      <Grid >
        <Box sx={{ bgcolor: '#F2F3F2',  color: '#48494B', pt: 2, m:1, height:"15vh" }}>
            
        </Box>
        <Box sx={{ bgcolor: '#F2F3F2',  color: '#48494B', pt: 2, m:1, height:"15vh" }}>
            <span>Billing Items</span>
            <button className='btncolor textcolor blue'>&#43; Billing Item</button>
            <button className='btncolor textcolor sky'>&#43; Regn Charges</button>
            <button className='btncolor textcolor orange'>&#43; Discount</button>
            <button className='btncolor textcolor red'>&#x2715; Clear Discount</button>
            <button className='btncolor textcolor red2'>&#x2715; Clear All</button>
            <span>Note:</span>
            <input type="text" />
            <BillingItems2 />
        </Box>
      </Grid>
    </Grid>
  );
}
