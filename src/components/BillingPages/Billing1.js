import React from 'react';
import Navbar from "./Billchild/Navbar"
import Body1 from "./Billchild/Body1"
import BillingItems from "./Billchild/BillingItems"
import { Box } from '@mui/system';
import "./Billchild/Bill.css"

const Billing1 = () => {
  return (
    <><Box sx={{ height:"100% ", bgcolor:"#ffffff",  fontFamily:"sans-serif" }}>
        <Navbar />
        <Body1 />
        <BillingItems />
      </Box>
        
    </>
  )
}

export default Billing1