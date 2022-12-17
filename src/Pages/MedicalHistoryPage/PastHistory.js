import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import "./MedicalHistory.css"

export default function TextFieldHiddenLabel() {
  return (
    <>
    <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
    <div>
        <p>Jaundice</p>    
        <p>Blood Transfusions</p>
        <p>Asthma/COPD</p>
        <p>Tuberculosis</p>
        <p>Thyroid Problem</p>
    </div>
    <div>
    <TextField
        id="filled-hidden-label-normal"
        variant="filled"
      /><TextField
      id="filled-hidden-label-normal"
      variant="filled"
    /><TextField
    id="filled-hidden-label-normal"
    variant="filled"
  /><TextField
  id="filled-hidden-label-normal"
  variant="filled"
/><TextField
        id="filled-hidden-label-normal"
        variant="filled"
      /><TextField
      id="filled-hidden-label-normal"
      variant="filled"
    />
    </div>
    </Stack>
    </>
  );
}
