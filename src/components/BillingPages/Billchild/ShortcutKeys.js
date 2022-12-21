import { Box } from '@mui/system'
import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ShortcutKeys = () => {
  return (
    <>
    <Box sx={{ bgcolor:"#F2F3F2", pt:4,pl:1, ml:1, mr:1}}>
            <span  className='shortSpan'>Shortcut Keys :<ArrowRightIcon color='success'/></span>
            <span  className='shortSpan2'>F2:Add Payment,Save & Print</span>
            <span  className='shortSpan2'>F4:Add Payment & Save</span>
            <span  className='shortSpan2'>F7:Save Without Payment</span>
    </Box>
    <Box sx={{p:1}}>
      <Box sx={{ ml:1, mr:1, display:"inline-block" }}>
          <span>Billed: <button className='red redborder marginjust'>200</button></span>
          <span className='shortSpan2 marginjust'>Discount: <button className='btn2 redborder'>0</button></span>
          <span className='shortSpan2 marginjust'>Paid: <button className='btn2 redborder'>0</button></span>
          <span className='shortSpan2 marginjust'>Net: <button className='btn4 redborder'>200</button></span>
      </Box>
      <Box sx={{ display:"inline-block" , float:"right", mb:'10px' }}>
        <button className='shortSpan2 btnlast savecolor'>Save</button>
        <button className='shortSpan2 btnlast savePrintcolor'>Save and Print</button>
        <button className='shortSpan2 btnlast printcolor'>print</button>
      </Box>
    </Box>
    </>
  )
}

export default ShortcutKeys