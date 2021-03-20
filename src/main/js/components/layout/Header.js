import React from 'react';
import Container from '../container/Container';
import styles from "../../css/components/layout/Header.module.css"


export default function Header ({children}) {

    return (
    <Container className={styles.bar}>
        <Container className={styles.container} >
            <h1 className={styles.title}>CHEMDATA</h1>
        </Container>
    </Container>
    )
}