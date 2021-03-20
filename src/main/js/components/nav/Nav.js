import React, { useState, useContext} from 'react';
import { AuthContext } from "../../context/AuthContextProvider";
import styles from "../../css/components/nav/Nav.module.css";
import authService from "../../service/AuthService";
import Container from "../container/Container";
import BurgerButton from "./BurgerButton";


export default function Nav ({children}) {
    const { user, setUser} = authService.getUser();
    const [ userRole, setUserRole] = useState(user.role);
    const [ isOpen, setIsOpen] = useState(false);

    const onBurgerButtonClick = e => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return (
        <Container className={`${styles.fullcontainer} ${isOpen ? styles.fullcontaineropen :""}`} >
            <Container className={`${styles.menu} ${isOpen ? styles.menuopen :""}`}>  
                <Container className={styles.contburgerbutton}>
                    <BurgerButton isOpen={ isOpen } onClick={onBurgerButtonClick}/>
                </Container>              
            </Container>
            <Container className={styles.body}>
                { children }                
            </Container>            
        </Container>        
    );
}
