import React from "react";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';


const Alert = ({ children, open, setOpen, type = "error", vertical = 'bottom', horizontal = 'center' }) => {  

  const handleClose = e => {
    setOpen(false);
  }

  return (
    <Snackbar open={open} autoHideDuration = {5000} onClose = { handleClose } anchorOrigin = {{ vertical, horizontal }} >
      <MuiAlert elevation={6} variant="filled" severity={ type } onClose={ handleClose }>
        { children }
      </MuiAlert>      
    </Snackbar>
  )
    
}
export default Alert;