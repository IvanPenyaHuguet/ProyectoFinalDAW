import React from 'react';
import styles from "../../css/components/form/FormError.module.css";

export default function ErrorSmall ( {message} ) {
    return (<small className={styles.formError}>{message}</small>);    
}