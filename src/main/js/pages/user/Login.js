import React from "react";
import LoginForm from "../../components/form/LoginForm";
import Container from '../../components/container/BoxContainer';
import MainTitle from "../../components/title/MainTitle";

import Molecules from '../../images/molecules.jpg';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({    
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%', 
        padding: '10px',
        background: 'transparent'        
    },
    imageone: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundImage: `url(${Molecules})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        opacity: '0.4',
        zIndex: '-1'
    }
}));

/**
 * React page for login
 * @returns React Component page for login
 */
export default function Login () {

    const classes = useStyles();

    return (
        <>
        <Container className={classes.container}>
            <MainTitle />
            <LoginForm />            
        </Container>         
        <Container className={classes.imageone}/>
        </>
    )
}