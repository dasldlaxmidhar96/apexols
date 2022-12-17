import * as React from 'react';
import "./MedicalHistory.css";


export default function FullWidthTextField() {
  return (
    <>
    <div>
        <p id='hist'>History of Present Illness</p>
    <div className='box-upperside'>
        <h6>History Of Present Illness</h6>
        <input type="button" value='Import from Template'/>
    </div>
    <div className='area-menu'>
        <input type="text" placeholder='write anything' className='area' />
    </div>
    </div>
    </>
  );
}
