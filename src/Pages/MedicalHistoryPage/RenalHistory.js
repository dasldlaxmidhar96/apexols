import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div  style={{border:"2px solid grey", display:"inline-block"}}>
        
        <div>
            <p className='fine'>Renal History</p>
        </div>
        <div className='renal'>
        <ul>
            <li><a><Checkbox {...label} /><span className='fsizekliye'>Edema Legs</span></a></li>
            <li><a><Checkbox {...label} /><span className='fsizekliye'>Facial Puffiness</span></a></li>     
            <li><a><Checkbox {...label} /><span className='fsizekliye'>Poor Urinary Sheam</span></a></li>
            <li><a><Checkbox {...label} /><span className='fsizekliye'>Recurrent UTI</span></a></li>
        </ul>
        </div>
        <div className='renal'>
        <ul>
            <li><a><Checkbox {...label} /><span className='fsizekliye'>Kidney Stones</span></a></li>
            <li><a><Checkbox {...label} /><span className='fsizekliye'>Hairloss</span></a></li>     
            <li><a><Checkbox {...label} /><span className='fsizekliye'>Skin Lesion</span></a></li>
            <li><a><Checkbox {...label} /><span className='fsizekliye'>Oral Ulcer</span></a></li>
        </ul>
        </div>
        <div className='renal'>
        <ul>
            <li><a><Checkbox {...label} /><span className='fsizekliye'>Bleeding Tendency</span></a></li>
            <li><a><Checkbox {...label} /><span className='fsizekliye'>Arthritis</span></a></li>     
            <li><a><Checkbox {...label} /><span className='fsizekliye'>Phobophobia</span></a></li>
        </ul>
        </div> 
     </div>                 
  );
}
