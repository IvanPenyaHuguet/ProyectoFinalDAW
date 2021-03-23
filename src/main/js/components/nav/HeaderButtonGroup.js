import React, {useContext} from 'react';
import Container from '../container/Container';
import styles from '../../css/components/nav/HeaderButtonGroup.module.css';
import {AuthContext} from '../../context/AuthContextProvider';
import authService from '../../service/AuthService';
import { useHistory, useLocation } from "react-router-dom";



export default function HeaderButtonGroup () {
    const { user, setUser} = useContext(AuthContext); 
    const history = useHistory();    
    

    const onCloseClick = () => {
        authService.signout();
        history.push("/login");
    }

    return(
        <Container className={styles.container}>
            <h3 className={styles.welcome}>Welcome, {user.user}</h3>
            <button onClick={onCloseClick} className={styles.logoutButton}>Log out</button>
        </Container>
    )
}