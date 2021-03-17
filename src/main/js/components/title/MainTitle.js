import React from "react";
import styles from "../../css/components/title/MainTitle.module.css";
import Container from "../container/Container";

/**
 * Main title for the main login page
 * @returns React component for the main title
 */
export default function MainTitle () {
    return (
        <Container>
            <h1 className={styles.title}>CHEMDATA</h1>
        </Container>
    )
}
