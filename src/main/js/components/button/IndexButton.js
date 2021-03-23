import React from 'react';
import { Link } from 'react-router-dom';
import Container from "../container/Container";
import styles from "../../css/components/button/IndexButton.module.css";


/**
 * Main reusable buttons for the index page
 * @param {children, title, url, description} props 
 * @returns 
 */

export default function IndexButton ( { children, title = "", url, description ="" }) {
    return (
        <Link to={url}>
            <Container className={styles.section} >
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                { children }
            </Container>  
        </Link>              
    )
}