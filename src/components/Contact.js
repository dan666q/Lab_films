// ContactForm.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Container>
      <p className='fs-1 mt-5'>Contact with us</p>

      <form onSubmit={handleSubmit} className='mt-3 ps-5 pe-5'>
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Your Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Your Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Your Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" className='mb-5' sx={{backgroundColor:'#0d6182'}}>
          Submit
        </Button>
      </form>
    </Container>

  );
};

export default ContactForm;
