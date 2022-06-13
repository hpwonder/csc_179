import React from 'react'
import {Link} from "react-router-dom"

function Dash() {
  return (
    <div className = "dash">
       <Link to ="/Add"> 
       <button>
            Add Employee
       </button>
       </Link>  
        
    </div>
  )
}

export default Dash