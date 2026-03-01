import React from 'react'
import { Snackbar, Alert } from '@mui/material'


function Toast({ open, setOpen, message, severity }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>{message}</Alert>
    </Snackbar>
  )
}

export default Toast