import React from "react";
import Container from "../container/MUIContainer";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({    
    title: {
        color: 'var(--var-primary-color)',       
        textAlign: 'center',
        letterSpacing: '10px',
        marginTop: '10px',
        [theme.breakpoints.down('md')]: {
            fontSize: '4.5rem',
        }, 
        [theme.breakpoints.down('sm')]: {            
            fontSize: '3.5rem',
        },   
    },
    subtitle: {
        color: 'var(--var-primary-color)',       
        textAlign: 'center',
        letterSpacing: '3px',
        [theme.breakpoints.down('md')]: {
            fontSize: '3.5rem',
        },  
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
        },  
    }
}));

/**
 * Main title for the main login page
 * @returns React component for the main title
 */
export default function MainTitle () {
    const classes = useStyles();
    return (
        <Container>
            <Typography variant="h1" component="h1" className={classes.title}>
                LARS
            </Typography>
            <Typography variant="h2" component="h2" className={classes.subtitle}>
                Laboratory Application for Reagents and Standards
            </Typography>            
        </Container>
    )
}
