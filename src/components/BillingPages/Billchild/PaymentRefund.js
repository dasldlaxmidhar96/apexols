import { Button } from '@mui/material'
import { Stack, Box } from '@mui/system'
import React from 'react'

const PaymentRefund = () => {
  return (
    <>
    <Stack sx={{ m:1 , bgcolor: '#F2F3F2', p:1,pr:50, display:"inline-block", border:1, borderColor:"gray"}}>
        <Box>
            <span className='spacex' >Payments</span>
            <Button className='spacex' variant='contained' color='warning' >&#43;Payment</Button>
        </Box>
    </Stack>
    <Stack sx={{ m:1 , bgcolor: '#F2F3F2', p:1,pr:15, display:"inline-block", border:1, borderColor:"gray"}}>
        <Box>
            <Button sx={{ bgcolor:"" }} className='spacex' variant='contained' color='warning' >&#43;Payment</Button>
        </Box>
    </Stack>
    <Stack sx={{  bgcolor: '#F2F3F2', ml:"14px", p:1,pr:7, display:"inline-block", border:1, borderColor:"gray"}}>
        <Box>
            <Button className='spacex' variant='contained' color='warning' >&#43;Payment</Button>
            <span className='secondSpan'>Refunds:</span>
            <Button sx={{minWidth: '25px',padding:'0px '}} variant='contained' color='error'>0</Button>
        </Box>
    </Stack>
    </>
  )
}

export default PaymentRefund