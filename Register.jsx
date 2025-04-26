import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    navigate("/user-details", { state: form });
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
          Sign Up
        </Typography>

        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />

        <Button
          variant="contained"
          sx={{ backgroundColor: '#4d2c14' }}
          size="large"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Box>
    </div>
  );
};

export default Register;
