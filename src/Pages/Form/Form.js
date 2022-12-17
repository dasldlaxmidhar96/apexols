import React, { useEffect, useState } from 'react'

const Form = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBMI] = useState(0);
    const handleHeight = (e) =>{
        let h = e.target.value;
        setHeight(h);
    }
    const handleWeight = (e) =>{
        let w = e.target.value;
        setWeight(w);
    }

    useEffect(()=>{
        let bmi1 = [Number(weight) / Number(height) / Number(height)] * 10000
        if(!isNaN(bmi1) && bmi1 !=="Infinity"){
            setBMI(bmi1.toFixed(2));
        }
        else{
            setBMI("-");
        }
        
    },[height,weight]);

  return (
   <div className='container'>
        <form className="mt-4">
            <div className='row'>
                <div className='mb-col-lg-12 mt-4'>
                    <label className="mb- col-lg-3 ">Height</label>
                    <input type="number" onChange={handleHeight} />
                </div>
                <div>
                    <label className="mb- col-lg-3 mt-4">Weight</label>
                    <input type="number" onChange={handleWeight} />
                </div>
                <div>
                    <label className="mb- col-lg-3 mt-4">BMI</label>
                    <h4 style={{display:"flex", justifyContent:"left",marginLeft:"18rem", marginTop:"-22px"}} >{bmi}</h4>
                </div>
                <div>
                    <label className="mb- col-lg-3 mt-4">Waist Circumderence</label>
                    <input type="text" />
                </div>
                 <div>
                    <label className="mb- col-lg-3 mt-4">BP Systolic</label>
                    <input type="text" />
                </div>
                <div>
                    <label className="mb- col-lg-3 mt-4">BP Diastolic</label>
                    <input type="text" />
                </div>
                <div>
                    <label className="mb- col-lg-3 mt-4">Pulse</label>
                    <input type="text" />
                </div>
                <div>
                    <label className="mb- col-lg-3 mt-4">HC</label>
                    <input type="text" />
                </div>
                <div>
                    <label className="mb- col-lg-3 mt-4">Temparature</label>
                    <input type="text" />
                </div>
            </div>
        </form>
   </div>
    )
}

export default Form