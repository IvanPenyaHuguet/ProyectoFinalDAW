import React, { useState } from "react";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";
import FormInput from "./FormInput";
import ErrorSmall from "./ErrorSmall";
import styles from "../../css/components/form/LoginForm.module.css";

/**
 * React component for the login form
 * @returns React component for the login form
 */
export default function Login() {
    /**
     * Hook to control the info of the form
     */
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  /**
   * Hook to control the errors of the form
   */
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  /**
   * Function to control the data of the form inputs
   * @param {event} e Event to change input data
   */
  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  /**
   * Function to call the api for login the user in the react app
   * @param {event} e Event of the form on submit
   */
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "") {
      setErrors({ ...errors, username: true });
    } else {
      setErrors({ ...errors, username: false });
      if (formData.password.length < 3) {
        setErrors({ ...errors, password: true });
      } else {
        setErrors({ ...errors, password: false });
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: new URLSearchParams({
            username: formData.username,
            password: formData.password,
          }),
        };      
        fetch("/login", options)
          .then((res) => console.log(res))
          .catch((e) => console.log(e));
      }
    }
  };
  /**
   * Function to call the api for login the user in guest mode
   * @param {event} e Event of the button on click
   */
  const onButtonClick = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({
        username: "guest",
        password: "guest",
      }),
    };   
    fetch("/login", options)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  
  };

  return (
    <form className={styles.form}>
      <h2 className={styles.formTitle}>Inicia sesión</h2>   
      <div className={styles.inputContainer}>
        <FormInput name="username" label="Usuario" onChange={onInputChange} value={formData.username} />        
        {errors.username === true && <ErrorSmall message="El campo no puede estar vacío"/>}        
      </div>
      <div className={styles.inputContainer}>
        <FormInput name="password" label="Contraseña" onChange={onInputChange} value={formData.password} type="password" />
        {errors.password == true && <ErrorSmall message="Al menos 3 carácteres"/>}       
      </div>
          <PrimaryButton onClick={onFormSubmit}>Entrar</PrimaryButton>   
          <SecondaryButton onClick={onButtonClick}>Invitado</SecondaryButton>      
    </form>
  );
}
