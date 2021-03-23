import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";
import FormInput from "./FormInput";
import ErrorSmall from "./ErrorSmall";
import styles from "../../css/components/form/LoginForm.module.css";
import authService from "../../service/AuthService";
import { AuthContext } from "../../context/AuthContextProvider";

/**
 * React component for the login form
 * @returns React component for the login form
 */
export default function Login(props) {
  const history = useHistory();
  /**
   * Context use from react
   */
  const { user, setUser} = useContext(AuthContext);  
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
        authService.signin(formData.username, formData.password)  
        .then(res => {
          setUser(res);
          history.push("/chemdata");
        })      
        .catch( e => console.log(e));
      }
    }
  };
  /**
   * Function to call the api for login the user in guest mode
   * @param {event} e Event of the button on click
   */
  const onButtonClick = (e) => {
    e.preventDefault();
    authService.signin("guest", "guest")  
    .then(res => {
      setUser(res);
      history.push("/chemdata");      
    })       
    .catch( e => console.log(e));  
  };
  /**
   * Send form with enter key
   * @param {event} e 
   */
  const handleKeyDown = (e) => {    
    if (e.key === 'Enter') {
      onFormSubmit(e);
    }
  }

  return (
    <form className={styles.form}>
      <h2 className={styles.formTitle}>Log in</h2>   
      <div className={styles.inputContainer}>
        <FormInput name="username" label="Username" onChange={onInputChange} value={formData.username} />        
        {errors.username === true && <ErrorSmall message="The field can not be empty."/>}        
      </div>
      <div className={styles.inputContainer}>
        <FormInput name="password" label="Password" onChange={onInputChange} value={formData.password} type="password" onKeyDown={handleKeyDown}/>
        {errors.password == true && <ErrorSmall message="At least 3 characters."/>}       
      </div>
          <PrimaryButton onClick={onFormSubmit}>Log in</PrimaryButton>   
          <SecondaryButton onClick={onButtonClick}>Guest</SecondaryButton>      
    </form>
  );
}
