import * as React from 'react';

export default function RowRadioButtonsGroup() {
  return (
    <>
   <div>
        
        <div>
            <p>Tayer Organ Involvement</p>
        </div>
        <div >
        <ul>
          <div><span>Eyes - Ratinopathy</span></div>
            <li><a><input type="checkbox" /><span>Edema Legs</span></a></li>
            <li><a><input type="checkbox" /><span>Facial Puffiness</span></a></li>     
            <li><a><input type="checkbox" /><span>Poor Urinary Sheam</span></a></li>
            <li><a><input type="checkbox" /><span>Recurrent UTI</span></a></li>
        </ul>
        </div>
        <div>
        <ul>
          <div><span>Eyes - Laser Photocaullation</span></div>
            <li><a><input type="checkbox" /><span>No</span></a></li>
            <li><a><input type="checkbox" /><span>RE</span></a></li>     
            <li><a><input type="checkbox" /><span>LE</span></a></li>
            <li><a><input type="checkbox" /><span>Bilateral</span></a></li>
        </ul>
        </div>
        <div >
        <ul>
          <div ><span>Eyes - Vision</span></div>
            <li><a><input type="checkbox" /><span>Good</span></a></li>
            <li><a><input type="checkbox" /><span>Impaired</span></a></li>     
            <li><a><input type="checkbox" /><span>Blind</span></a></li>
        </ul>
        </div>
        </div>
    </>
  )
}