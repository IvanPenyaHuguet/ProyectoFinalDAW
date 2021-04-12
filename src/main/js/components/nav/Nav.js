import React, { useState, useEffect, useContext} from 'react';
import styles from "../../css/components/nav/Nav.module.css";
import authService from "../../service/AuthService";
import Container from "../container/Container";
import BurgerButton from "./BurgerButton";
import LinkOfMenu from "./LinkOfMenu";
import AllReagentsIcon from "../icons/AllReagentsIcon";
import InorganicIcon from "../icons/InorganicIcon";
import OrganicIcon from "../icons/OrganicIcon";
import WaterSolIcon from "../icons/WaterSolIcon";
import OrganicSolIcon from "../icons/OrganicSolIcon";
import StandardIcon from "../icons/Standard";
import AdminIcon from "../icons/AdminIcon";
import {AuthContext} from "../../context/AuthContextProvider";
import { useTranslation } from "react-i18next";


export default function Nav ({children}) {
    const { t } = useTranslation();
    const {user, setUser} = useContext(AuthContext);
    const [ userRole, setUserRole] = useState(user.role);
    const [ isOpen, setIsOpen] = useState(false);
    
    useEffect( () => {
        if (user!= null) {
            setUserRole(user.role);
        }
        else {
            setUserRole(null);
        }
    }, [user])
    const onBurgerButtonClick = e => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return (
        <Container className={`${styles.fullcontainer} ${isOpen ? styles.fullcontaineropen :""}`} >
            <nav className={`${styles.menu} ${isOpen ? styles.menuopen :""}`}>  
                <Container className={styles.contburgerbutton}>
                    <BurgerButton isOpen={ isOpen } onClick={onBurgerButtonClick}/>
                </Container>
                <Container className={styles.buttonmenu}>
                    <LinkOfMenu to="/reagent/all" text={t('nav.link.allreagents')} icon={<AllReagentsIcon />} isOpen={isOpen}/>
                    <LinkOfMenu to="/reagent/inorganic" text={t('nav.link.inorganicreagents')} icon={<InorganicIcon />} isOpen={isOpen}/>
                    <LinkOfMenu to="/reagent/organic" text={t('nav.link.organicreagents')} icon={<OrganicIcon />} isOpen={isOpen}/>
                    <LinkOfMenu to="/solution/water" text={t('nav.link.standardsol')} icon={<WaterSolIcon />} isOpen={isOpen}/>
                    <LinkOfMenu to="/solution/organic" text={t('nav.link.orgstdsol')} icon={<OrganicSolIcon />} isOpen={isOpen}/>
                    <LinkOfMenu to="/standard/all" text={t('nav.link.standards')} icon={<StandardIcon />} isOpen={isOpen}/>
                    {userRole.includes("ROLE_MODIFY_USERS") && <LinkOfMenu to="/admin" text={t('nav.link.manage')} icon={<AdminIcon />}isOpen={isOpen} />}
                </Container>              
            </nav>
            <Container className={styles.body}>
                { children }                
            </Container>            
        </Container>        
    );
}
