import React from "react";

const PastHistory = () => {
  return (
    <>
    <div className="seconddiv">
      <p>Past History</p>
      <div className="firstdiv22">
      <div className="flex-container">
        <div className="flex-child">Jaundice</div>
        <input type="text" className="flex-child" />
      </div>
      <div className="flex-container">
        <div className="flex-child">Blood Transfusions</div>
        <input type="text" className="flex-child" />
      </div><div className="flex-container">
        <div className="flex-child">Asthma/COPD</div>
        <input type="text" className="flex-child" />
      </div><div className="flex-container">
        <div className="flex-child">Tuberculosis</div>
        <input type="text" className="flex-child" />
      </div><div className="flex-container">
        <div className="flex-child">Thyroid Problem</div>
        <input type="text" className="flex-child" />
      </div>
      </div>
      </div>
    </>
  );
};

export default PastHistory;
