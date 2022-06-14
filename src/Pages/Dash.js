import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../Assets/logo.JPG"
import "../Styles/Dash.css"

function Dash() {
  return (
    <div className = "dash">
      <div className="header">

        <div className="leftSide">
          <img src={Logo} />
        </div>
        <div className="compName">
          <h1>Company Health Dashboard</h1>
       </div>

      </div>
      

       <div className="filter">
        <select className="selectGender" id="selectGender">
          <option gender="gender" placeholder='Select gender'/>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="transgender">Transgender</option>
          <option value="nonbc">Non-binary/Non-conforming</option>
          <option value="na">Prefer not to answer</option>
        </select>

        <select className="selectExerciseHours" id="selectExerciseHours">
          <option value="zeroNine">0-9</option>
          <option value="tenTwenty">10-20</option>
          <option value="thirtyPlus">30+</option>
       </select>

       <button>
        Standard Deviation
       </button>
       <div className="add">
        <Link to ="/Add"> 
          <button>
            Add Employee
          </button>
        </Link>  
       </div>
       </div>

       <h3>Employee Information</h3>
    </div>
  )
}

export default Dash