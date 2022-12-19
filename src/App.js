import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header.js";
import {  Route, Routes } from "react-router-dom"
import Allergies from './Pages/Allergies'
import Attachments from './Pages/Attachments'
import ChiefComplaints from './Pages/ChiefComplaints'
import Diagnosis from './Pages/Diagnosis'
import Examination from './Pages/Examination'
import IPAddmission from './Pages/IPAddmission'
import LabResults from './Pages/LabResults'
import MedicalHistory from './Pages/MedicalHistory'
import Prescribed from './Pages/Prescribed'
import Prescriptions from './Pages/Prescriptions'
import SummaryandPrint from './Pages/SummaryandPrint'
import Vitals from './Pages/Vitals'
// import Sidebar from "./components/Sidebar";
import DoctorSettings from "./Pages/DoctorSettings";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<DoctorSettings />} />
        {/* <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/examination" element={<Examination />} />
        <Route path="/ipaddmission" element={<IPAddmission />} />
        <Route path="/medicalhistory" element={<MedicalHistory />} />
        <Route path="/labresults" element={<LabResults />} />
        <Route path="/prescribed_test" element={<Prescribed />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/summaryandPrint" element={<SummaryandPrint />} />
        <Route path="/vitals" element={<Vitals />} />
        <Route path="/allergies" element={<Allergies />} />
        <Route path="/attachments" element={<Attachments />} /> */}
        {/* <Route path="/doctorsettings" element={<DoctorSettings />} /> */}
      </Routes>
     
    </>
  );
}

export default App;
