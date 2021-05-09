import React, {useContext} from 'react';
import Container from '../container/Container';
import styles from '../../css/components/nav/HeaderButtonGroup.module.css';
import {AuthContext} from '../../context/AuthContextProvider';
import authService from '../../service/AuthService';
import { useHistory  } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChangeLanguage from '../general/helper/ChangeLanguage';



export default function HeaderButtonGroup () {
    const { t } = useTranslation();
    const { user, setUser} = useContext(AuthContext); 
    const history = useHistory();    
    

    const onCloseClick = () => {
        authService.signout();
        history.push("/login");
    }

    return(
        <Container className={styles.container}>
            <h3 className={styles.welcome}>{t('header.welcome')}, {user.user}</h3>
            <button onClick={onCloseClick} className={styles.logoutButton}>{t('header.button.logout')}</button>
            <ChangeLanguage />
        </Container>
    )
}