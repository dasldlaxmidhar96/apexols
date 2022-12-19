import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div>
        <ul className="nav flex-column bg-info d-inline-block ml-5">
          <li className="nav-item">
            <Link to="/" className="nav-link active text-light" aria-current="page">
              Chief Complaints
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/vitals" className="nav-link text-light">
              Vitals
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/allergies" className="nav-link text-light">
              Allergies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/medicalhistory" className="nav-link text-light">Medicall History</Link>
          </li>
          <li className="nav-item">
            <Link to="/examination" className="nav-link text-light">
              Examination
            </Link>
          </li><li className="nav-item">
            <Link to="/prescribed_test" className="nav-link text-light">
              Prescribed Tests
            </Link>
          </li><li className="nav-item">
            <Link to="/labresults" className="nav-link text-light">
              Lab Results
            </Link>
          </li><li className="nav-item">
            <Link to="/diagnosis" className="nav-link text-light">
              Diagnosis
            </Link>
          </li><li className="nav-item">
            <Link to="/prescriptions" className="nav-link text-light">
              Prescriptions
            </Link>
          </li><li className="nav-item">
            <Link to="/ipaddmission" className="nav-link text-light">
              IP Admission
            </Link>
          </li><li className="nav-item">
            <Link to="/attachments" className="nav-link text-light">
              Attachments
            </Link>
          </li><li className="nav-item">
            <Link 
           to="/summaryandprint" className="nav-link text-light">
              Summary and Print
            </Link>
            <Link to="/doctorsettings" className="nav-link text-light">DoctorSettings</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar