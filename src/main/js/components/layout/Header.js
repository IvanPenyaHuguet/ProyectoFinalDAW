import React from 'react';
import Container from '../container/Container';
import styles from "../../css/components/layout/Header.module.css"
import HeaderButtonGroup from '../nav/HeaderButtonGroup';

/**
 * React component for the header bar
 * @param {children} children Children components from props 
 * @returns 
 */

export default function Header ({children}) {

    return (
        <Container className={styles.bar}>
            <Container className={styles.container} >
                <div className={styles.div}>
                    <h1 className={styles.title}>LARS</h1>
                    <Container className={styles.subtitle}>
                        <h2 className={styles.by}>by Iván Peña Huguet</h2>                    
                    </Container>
                </div>                  
                <HeaderButtonGroup />              
            </Container>            
        </Container>
    )
}