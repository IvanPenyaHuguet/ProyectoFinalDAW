import React, { useState } from 'react';
import { Formik } from 'formik';

import Form from '../form/Form';
import FormInputText from '../form/MUIFormInputText';
import User from '../../lib/entities/User';
import { useTranslation } from 'react-i18next';
import Alert from '../popups/Alert';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({    
    formadd: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '10px 15px 20px'        
    },
    buttonContainer: {
        margin: '0 20px', 
        alignSelf: 'center'       
    }
}));



export default function AddUser () {

    const user = new User();  
    const [ alert, setAlert ] = useState(false);    
    user.getInitialValue();    
    const { t } = useTranslation(); 
    const classes = useStyles();   

    return (
        <>
            { alert && <Alert open={alert ? true : false} setOpen={setAlert} type={alert.type}>{alert.message}</Alert> }
            <Formik
                initialValues={user.getValues()}
                validationSchema={user.getValidationSchema(t)}                
                onSubmit= {(values, { setSubmitting }) => {                    
                    user.save(values, setSubmitting, setAlert )
                }}
            >
                { ({ submitForm, isSubmitting }) => (
                    <Form>
                        <Paper className={classes.formadd} elevation={3}>                                           
                            <FormInputText 
                                label={t('form.user.add.name')}                                
                                name="name"   
                            />
                            <FormInputText 
                                label={t('form.user.add.surname')}                                
                                name="surname"   
                            />
                            <FormInputText 
                                label={t('form.user.add.username')}                                
                                name="username"   
                            />
                            <FormInputText 
                                label={t('form.user.add.password')}                                
                                name="pass"
                                type="password"   
                            />                           
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}
                                endIcon={<SaveIcon />}
                                className={classes.buttonContainer}
                            >
                                {t('general.add')}
                            </Button> 
                        </Paper>                            
                    </Form>
                )}                
            </Formik>
        
        </>
    )
}