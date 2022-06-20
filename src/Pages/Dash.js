import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../Assets/logo2.jpg"
import Ahw from "../Assets/ahw.png"
import Vitals from "../Assets/vitals.png"
import Exercise from "../Assets/exercise.png"
import Work from "../Assets/work3.png"
import Balance from "../Assets/balance.png"
import PersonIcon from '@mui/icons-material/Person';
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
         <div className="addE">
        <Link to ="/Add"> 
          <button>
            Add Employee
          </button>
        </Link>  
        
       </div>
       </div>
       
       <div className = "body">
       <h2>Employee Information</h2>
       <div className = "stats">
        <div className = "ahw">
          
          <h4>Age
          <div id = "age">23</div>
          </h4>
          <h4>Height (feet/in.)
          <div id = "height">5'10</div>
          </h4>
          <h4>Weight (lbs)
          <div id = "weight">154</div>
          </h4>
          <img src = {Ahw}/>
          </div>
          <div className = "hrs">
        <h4> Hours of exercise per week
        <div id = "exercise">20</div>
        </h4>
        <img src = {Exercise}/>
        </div>
       
        <div className = "vacBal">
        <h4> Vacation Balance (hours)
        <div id = "exercise">20</div>
        </h4>
        <img src = {Balance}/>
        </div>
        <div className = "vitals">
        <h4>Body Temperature (°C)
          <div id = "bodyTemp">30</div>
          </h4>
          <h4>Pulse Rate (bpm)
          <div id = "pulseRate">150</div>
          </h4>
          <img src = {Vitals}/>
          <h4 id = "hT">Blood Pressure (mm Hg)
          <div id = "bloodPressure">120</div>
          </h4>
          <h4 id = "hT2">RespirationRate (bpm)
          <div id = "respirationRate">30</div>
          </h4>
          <div></div>
        </div>
        <div className = "hrs">
        <h4> Hours of work per week
        <div id = "exercise">40</div>
        </h4>
        <img src = {Work}/>
          
        </div>
        <div className = "extra">
        <h4> 
        <div>Extra</div>
        </h4>
        </div>
      
        
       </div>
       </div>
       
    </div>
  )
}

export default Dash