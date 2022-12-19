import * as React from 'react';
import Stack from '@mui/material/Stack';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export default function TextFieldHiddenLabel() {
  return (
    <div>
        <p>Diabetes and its Complications</p>
        <div className='seconddiv'>
    <Stack
      component="form"
      sx={{
        width: '100ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <div className="flex-container">
        <div className="flex-child">Duration of DM</div>
        <input type="text" placeholder='type to get suggestions' className="flex-child" />
        <button className='smallbtn'><FontAwesomeIcon icon={faXmark} /></button>
        <button className='largebtn'>Add More</button>
      </div>
      <div className="flex-container">
        <div className="flex-child">Glycemic Control</div>
        <input type="text" placeholder='type to get suggestions' className="flex-child" />
        <button className='smallbtn'><FontAwesomeIcon icon={faXmark} /></button>
        <button className='largebtn'>Add More</button>
      </div>
      <div className="flex-container">
        <div className="flex-child">Hyperglycemic Episodes</div>
        <input type="text" placeholder='type to get suggestions' className="flex-child" />
        <button className='smallbtn'><FontAwesomeIcon icon={faXmark} /></button>
        <button className='largebtn'>Add More</button>
      </div>
    </Stack>
    </div>
    </div>
  );
}







