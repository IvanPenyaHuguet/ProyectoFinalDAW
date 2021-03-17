import React, { useState } from "react";
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
  };

  return (
    <form onSubmit={onFormSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>Inicia sesión</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="username" className="text-xl">
          Nombre de usuario:
        </label>
        <input
          type="text"
          name="username"
          className="w-full px-1 border-0 border-b-2 outline-none border-primary focus:ring-0 focus:shadow-lg focus:border-secondary"
          placeholder="Nombre de usuario ... "
          onChange={onInputChange}
          value={formData.username}
        />
        {errors.username == true && (
          <small>El campo no puede estar vacío.</small>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className="text-xl">
          Contraseña:
        </label>
        <input
          type="password"
          name="password"
          className="w-full px-1 border-0 border-b-2 outline-none border-primary focus:ring-0 focus:shadow-lg focus:border-secondary"
          placeholder="Contraseña ... "
          onChange={onInputChange}
          value={formData.password}
        />
        {errors.password == true && <small>Al menos 3 carácteres.</small>}
      </div>

      <button
        type="submit"
        className="w-1/2 bg-primary text-terciary py-2 outline-none border-2 text-xl self-center rounded-lg my-4 shadow-lg hover:text-quaternary transform hover:scale-105"
      >
        Entrar
      </button>
      <button
        type="button"
        onClick={onButtonClick}
        className="w-full text-primary border-primary outline-none border-2 py-2 text-xl rounded-lg shadow-lg hover:text-terciary hover:bg-primary"
      >
        Invitado
      </button>
    </form>
  );
}
