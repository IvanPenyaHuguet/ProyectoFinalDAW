import React, { useState } from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
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
        padding: '10px 20px'        
    },
    container: {
       
    },
    title: {
        textAlign: 'center',
    }
}));


export default function ModifyRowTable({row , setOpen}) {

    console.log(row);
    const classes = useStyles();
    const [ loading, setLoading ] = useState(true);
    const open = row !== false;
    

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Backdrop open={open} className={classes.backdrop} >            
                {/* <CircularProgress color="inherit" /> */}
            <ClickAwayListener onClickAway={handleClose}>
                <Paper elevation={8} className={classes.paper}>
                    <Container className={classes.container}>
                        <Typography className={classes.title} variant="h3" component="h3">
                            { row.name ? row.name.toUpperCase() : row.spanishName.toUpperCase() }
                        </Typography>
                        <Divider />
                        <Container>

                        </Container>
                    </Container>
                </Paper>  
            </ClickAwayListener>              
        
        </Backdrop>
    )
}



