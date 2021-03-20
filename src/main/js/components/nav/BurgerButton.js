import React from 'react';
import styles from "../../css/components/nav/BurgerButton.module.css"

export default function BurgerMenu ( { isOpen, onClick} ) {
    return (
        <>
            <div onClick={onClick} class={`${styles.burger} ${styles.burgerarrow} ${isOpen ? styles.open :""}`}>
                <div class={styles.burgerlines}></div>
            </div>
        </>        
    )
}