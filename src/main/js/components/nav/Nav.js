import React, { useState, useContext} from 'react';
import { AuthContext } from "../../context/AuthContextProvider";
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


export default function Nav ({children}) {
    const user= authService.getUser();
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
                <Container className={styles.buttonmenu}>
                    <LinkOfMenu to="/reagent/all" text="Reactivos Completo" icon={<AllReagentsIcon />} isOpen={isOpen}/>
                    <LinkOfMenu to="/reagent/inorganic" text="Reactivos Inorgánicos" icon={<InorganicIcon />} isOpen={isOpen}/>
                    <LinkOfMenu to="/reagent/organic" text="Reactivos Orgánicos" icon={<OrganicIcon />} isOpen={isOpen}/>
                    <LinkOfMenu to="/solution/water" text="Patrones Acuosos" icon={<WaterSolIcon />} isOpen={isOpen}/>
                    <LinkOfMenu to="/solution/organic" text="Patrones Orgánicos" icon={<OrganicSolIcon />} isOpen={isOpen}/>
                    <LinkOfMenu to="/standard/all" text="Patrones" icon={<StandardIcon />} isOpen={isOpen}/>
                    {userRole == "ADMIN" && <LinkOfMenu to="/admin" text="Administrar" icon={<AdminIcon />}isOpen={isOpen} />}
                </Container>              
            </Container>
            <Container className={styles.body}>
                { children }                
            </Container>            
        </Container>        
    );
}
