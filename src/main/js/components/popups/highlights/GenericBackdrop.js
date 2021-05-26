import React from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: 2000
    },
    paper:{
        width: '1000px',
        minWidth: '800px',
        height: '700px',
        minHeight: '600px',
        overflow: 'auto',
        padding: '10px 20px',
        zIndex: 3000        
    }
}));

export default function GenericBackdrop({open, setOpen, children}) {
    
    const classes = useStyles();   
      
    const handleClose = () => {
        setOpen(false);
    }    

    return (
        <Backdrop open={open} className={classes.backdrop} onClose={handleClose}>           
            {/* <ClickAwayListener onClickAway={handleClose}> */}
                <Paper elevation={8} className={classes.paper}>
                    { children }
                </Paper>  
            {/* </ClickAwayListener>              */}
        </Backdrop>
    )
}