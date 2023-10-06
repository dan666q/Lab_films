import React from 'react'
import { TextField, Button } from '@mui/material'
export default function Contact() {
  return (
    <div>
      <form className='mt-5 mb-5'>
        <TextField
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
          className='mt-5'
        />
<br />
<TextField
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="Email"
          variant="outlined"
          className=''
        />
<br />
<TextField
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="Phone"
          variant="outlined"
          className=''
        />
<br />
<TextField className='mt-3'
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue="Your message"
          variant="standard"
          style={{ width: "400px"}}
        />
<br />
        <Button variant="contained" color="primary" className='mb-5 mt-5'>
          Submit
        </Button>
      </form>
</div>
  )
}
