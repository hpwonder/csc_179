import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../Assets/logo2.jpg"
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
      
      
       <div className="toprow">
        <select className="selectGender" id="selectGender">
          <option value="" disabled selected>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="transgender">Transgender</option>
          <option value="nonbc">Non-binary/Non-conforming</option>
          <option value="na">Prefer not to answer</option>
        </select>

        <select className="selectExerciseHours" id="selectExerciseHours">
         <option value="" disabled selected>Select hours of exercise per week </option>
          <option value="zeroNine">0-9</option>
          <option value="tenTwenty">10-20</option>
          <option value="thirtyPlus">30+</option>
       </select>


       
       <button className = "standardDev">
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
       
       <div className = "body">
       <h3>Employee Information</h3>
       </div>
       
    </div>
  )
}

export default Dash