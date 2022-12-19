import * as React from 'react';

export default function RowRadioButtonsGroup() {
  return (
    <>
   <div  className='tdiv'>
        
        <div>
            <p className='fine tayHei'>Tayer Organ Involvement</p>
        </div>
        <div className='renal'>
        <ul>
          <div className='alco eyes'><span className='alco eyes'>Eyes - Ratinopathy</span></div>
            <li><a><input type="checkbox" /><span className="fsizekliye">Edema Legs</span></a></li>
            <li><a><input type="checkbox" /><span className="fsizekliye">Facial Puffiness</span></a></li>     
            <li><a><input type="checkbox" /><span className="fsizekliye">Poor Urinary Sheam</span></a></li>
            <li><a><input type="checkbox" /><span className="fsizekliye">Recurrent UTI</span></a></li>
        </ul>
        </div>
        <div className='renal last'>
        <ul>
          <div className='alco eyes'><span className='alco eyes'>Eyes - Laser Photocaullation</span></div>
            <li><a><input type="checkbox" /><span className="fsizekliye">No</span></a></li>
            <li><a><input type="checkbox" /><span className="fsizekliye">RE</span></a></li>     
            <li><a><input type="checkbox" /><span className="fsizekliye">LE</span></a></li>
            <li><a><input type="checkbox" /><span className="fsizekliye">Bilateral</span></a></li>
        </ul>
        </div>
        <div className='renal atlast'>
        <ul>
          <div className=' alco eyes '><span className='alco eyes'>Eyes - Vision</span></div>
            <li><a><input type="checkbox" /><span className="fsizekliye">Good</span></a></li>
            <li><a><input type="checkbox" /><span className="fsizekliye">Impaired</span></a></li>     
            <li><a><input type="checkbox" /><span className="fsizekliye">Blind</span></a></li>
        </ul>
        </div>
        </div>
    </>
  )
}