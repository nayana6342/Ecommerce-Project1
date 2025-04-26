import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import './Login.css';
import { Link } from 'react-router-dom';

const SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Test key

export const Login = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the CAPTCHA');
      return;
    }
    console.log('Captcha verified, submitting form...');
  };

  return (
    <div>
    
      <Box className="first">
        <Typography
          variant="h5"
          align="center"
          fontFamily="croobie"
          fontWeight="bold"
          color="#4d2c14"
          marginBottom="1rem"
        >
          Login
        </Typography>

        <select>
          <option value="" disabled>Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <TextField label="Username" variant="outlined" fullWidth />
        <TextField label="Password" type="password" variant="outlined" fullWidth />

        <div className="recaptcha-container">
          <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />
        </div>

        <Button variant="contained" sx={{ backgroundColor: '#4d2c14' }} size="large" onClick={handleSubmit}>
          Log In
        </Button>
        <p>Don't you have an account? <Link to="/register">Sign up</Link></p>
      </Box>
    </div>
  );
};

export default Login;
