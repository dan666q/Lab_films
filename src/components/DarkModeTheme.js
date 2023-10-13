// DarkModeSwitch.js
import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const DarkModeSwitch = ({ checked, onChange }) => {
  return (
    <div className='position-absolute top-1 end-0'>
    <FormControlLabel
      control={<Switch checked={checked} onChange={onChange} />}
      label="Dark Mode"
    />
    </div>

  );
};

export default DarkModeSwitch;
