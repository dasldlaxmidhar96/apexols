import * as React from 'react';

export default function RowRadioButtonsGroup() {
  return (
    <>
   <div  style={{border:"1px solid grey", display:"inline-block"}}>
        
        <div>
            <p className='fine'>Renal History</p>
        </div>
        <div className='renal'>
        <ul>
          <div className='alco'><span className='alco'>Smoking</span></div>
            <li><a><input type="radio" />Yes</a></li>
            <li><a><input type="radio" />No</a></li>     
            <li><a><input type="radio" />N/A</a></li>
            <li><a><input type="text" /></a></li>
        </ul>
        </div>
        <div className='renal'>
        <ul>
            <div className='alco'><span className='alco'>Alcohol Use</span></div>
            <li><a><input type="radio" />Yes</a></li>
            <li><a><input type="radio" />No</a></li>     
            <li><a><input type="radio" />N/A</a></li>
            <li><a><input type="text" /></a></li>
        </ul>
        </div>
        <div className='renal'>
        <ul>
            <div className='alco'><span className='alco'>Drug Abuse</span></div>
            <li><a><input type="radio" />Yes</a></li>
            <li><a><input type="radio" />No</a></li>     
            <li><a><input type="radio" />N/A</a></li>
            <li><a><input type="text" /></a></li>
        </ul>
        </div>
        <div className='renal'>
        <ul>
            <div className='alco'><span className='alco'>Tatto Marks</span></div>
            <li><a><input type="radio" />Yes</a></li>
            <li><a><input type="radio" />No</a></li>     
            <li><a><input type="radio" />N/A</a></li>
            <li><a><input type="text" /></a></li>
        </ul>
        </div> <div className='renal'>
        <ul>
          <div className='alco'><span className='alco'>Excercise</span></div>
            <li><a><input type="radio" />Yes</a></li>
            <li><a><input type="radio" />No</a></li>     
            <li><a><input type="radio" />N/A</a></li>
            <li><a><input type="text" /></a></li>
        </ul>
        </div>
        <div className='renal marginkk'>
        <ul>
          <div className='alco'><span className='alco'>Diet</span></div>
            <li><a><input type="checkbox" />Veg</a></li>
            <li><a><input type="checkbox" />Non Veg</a></li>     
            <li><a><input type="checkbox" />Vegan</a></li>
        </ul>
        </div>
        <div className='renal marginkk22'>
        <ul>
          <div className='alco'><span className='alco'>No of Children</span></div>
            <li><a><input type="text" /></a></li>  
        </ul>
        </div>   
     </div>       
     </>
  );
}
