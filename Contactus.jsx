import { Button, TextField } from '@mui/material'
import React from 'react'
//import './Login.css';

const Contactus = () => {
  return (
    <div className='first'>
        <h1 className='contact-title'>Contact Us</h1>
        <TextField label='username' variant='outlined'>
        </TextField>
        <TextField label="email" type="email" variant="outlined"></TextField>
        <TextField label="message" variant="outlined"></TextField>
        <Button className='first button' variant='contained' sx={{ backgroundColor: '#4d2c14' }}>Send message</Button>
       
    </div>
  )
}

export default Contactus