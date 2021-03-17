import React from "react";
import LoginForm from "../../components/form/LoginForm";
import Container from "../../components/container/Container";
import MainTitle from "../../components/title/MainTitle";
import styles from "../../css/components/container/FormContainer.module.css";

/**
 * React page for login
 * @returns React Component page for login
 */
export default function Login () {
    return (
        <Container className={styles.formContainer}>
            <MainTitle />
            <LoginForm />            
        </Container> 
    )
}