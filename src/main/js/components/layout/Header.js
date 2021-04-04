import React from 'react';
import Container from '../container/Container';
import styles from "../../css/components/layout/Header.module.css"
import HeaderButtonGroup from '../nav/HeaderButtonGroup';
import { Link} from 'react-router-dom';

/**
 * React component for the header bar
 * @param {children} children Children components from props 
 * @returns 
 */

export default function Header ({children}) {

    return (
        <header className={styles.bar}>
            <Container className={styles.container} >
                <div className={styles.div}>
                    <Link to="/chemdata" className={styles.title}>
                        <h1 className={styles.title}>LARS</h1>                        
                    </Link>
                        <Container className={styles.subtitle}>
                            <h2 className={styles.by}>by Iván Peña Huguet</h2>                    
                        </Container>
                </div>                  
                <HeaderButtonGroup />              
            </Container>            
        </header>
    )
}