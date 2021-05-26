import React from 'react';

import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({    
    paper:{        
        minWidth: '800px',
        height: '700px',
        minHeight: '600px',        
        padding: '10px 20px',             
    }
}));

export default function GenericDialog({open, setOpen, children}) {
    
    const classes = useStyles();   
      
    const handleClose = () => {
        setOpen(false);
    }    

    return (
        <Dialog 
            open={open} 
            onClose={handleClose} 
            scroll='paper'
            fullWidth
            maxWidth='md'
            aria-labelledby="dialog-title"
        >          
            <Paper elevation={8} className={classes.paper}> 
                { children }
            </Paper> 
        </Dialog>
    )
}