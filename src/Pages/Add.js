import React from 'react'
import {Link} from "react-router-dom"
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import '../Styles/Add.css'
function Add() {
  return (
<div className = "add">
  <div className = "form"> 
  <div className = "text">
  <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Adding Employee
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField 
          
            
            name="firstName"
            label="First name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            
            id="age"
            name="age"
            label="Age"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="height"
            name="height"
            label="Height"
            fullWidth
            variant="standard"
          />
          
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="weight"
            name="weight"
            label="Weight"
            fullWidth
            variant="standard"
          />
          
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            
            id="bodyTemp"
            name="bodyTemp"
            label="Body Temperature"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="pulseRate"
            name="pulseRate"
            label="Pulse Rate"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="bloodPressure"
            name="bloodPressure"
            label="Blood Pressure"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
          
            id="respirationRate"
            name="respirationRate"
            label="Respiration Rate"
            fullWidth
            variant="standard"
          />
        </Grid>
 
        <Grid item xs={12 } sm={6}>
          <TextField
          
            id="avgExercise"
            name="avgExercise"
            label="Avg. Hours of Exercise per week"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          
            id="avgWork"
            name="avgWork"
            label="Avg. Hours of Work per week"
            fullWidth
            variant="standard"
          />
          
        </Grid>
        <Grid item xs={12}>
          <TextField
          
            id="vacBal"
            name="vacBal"
            label="Vacation Balance (hours)"
            fullWidth
            variant="standard"
            
          />
            
        </Grid>

        <Grid item xs={12}>
        <button type ="submit"> Submit</button>
            
        </Grid>
        
      
        
      </Grid>
      
    </React.Fragment>
    </div>
    </div>
    </div>

  )
}

export default Add