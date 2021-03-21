import React,{ useState, useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import styles from '../../css/components/nav/LinkOfMenu.module.css';
import Container from '../container/Container';

export default function LinkOfMenu ({to, text, icon ="", isOpen}) {
    const [ showText, setShowText] = useState(isOpen);
    useEffect( () => {
        if (showText === true) {
            setTimeout( () => {
                setShowText(isOpen);
            }, 2000)
        }
        else {
            setShowText(isOpen);
        }
    }, [isOpen])

    return (
        <NavLink exact to={to} className={`${styles.link} ${isOpen ? styles.linkopen : ""}`} activeClassName={styles.selected}>
            {showText && <p className={`${styles.text} ${isOpen ? "" : styles.notext}`}>{text}</p>}
            <Container className={styles.icon}>{icon}</Container>            
        </NavLink>        
    )
}