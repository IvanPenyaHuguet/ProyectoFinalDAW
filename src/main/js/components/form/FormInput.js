import React from "react";
import styles from "../../css/components/form/FormInput.module.css";
import Container from "../container/Container";

export default function FormInput({ name , label, onChange, value, type ="text" }) {
  return (
    <Container className={styles.container}>      
      <input
        type={type}
        name={name}
        className={styles.formInput}        
        onChange={onChange}
        value={value}
        required
      />
      <label htmlFor={name} className={styles.formLabel}>
        {label}
      </label>
      <div className={styles.highlight}/>
      <span className={styles.span}/>
    </Container>
  );
}
