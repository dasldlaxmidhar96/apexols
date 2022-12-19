import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div  style={{border:"2px solid grey", height:"40vh"}}>
        
        <div>
            <p className='fine'>Renal History</p>
        </div>
        <div className='renal'>
        <ul>
            <li><a><Checkbox {...label} />Edema Legs</a></li>
            <li><a><Checkbox {...label} />Facial Puffiness</a></li>     
            <li><a><Checkbox {...label} />Poor Urinary Sheam</a></li>
            <li><a><Checkbox {...label} />Recurrent UTI</a></li>
        </ul>
        </div>
        <div className='renal'>
        <ul>
            <li><a><Checkbox {...label} />Edema Legs</a></li>
            <li><a><Checkbox {...label} />Facial Puffiness</a></li>     
            <li><a><Checkbox {...label} />Poor Urinary Sheam</a></li>
            <li><a><Checkbox {...label} />Recurrent UTI</a></li>
        </ul>
        </div>
        <div className='renal'>
        <ul>
            <li><a><Checkbox {...label} />Edema Legs</a></li>
            <li><a><Checkbox {...label} />Facial Puffiness</a></li>     
            <li><a><Checkbox {...label} />Poor Urinary Sheam</a></li>
            <li><a><Checkbox {...label} />Recurrent UTI</a></li>
        </ul>
        </div> 
     </div>                 
  );
}
