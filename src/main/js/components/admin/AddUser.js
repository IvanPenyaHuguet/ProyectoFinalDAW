import React, { useState } from 'react';
import { Formik } from 'formik';

import Form from '../form/Form';
import FormInputText from '../form/MUIFormInputText';
import User from '../../lib/entities/User';
import { useTranslation } from 'react-i18next';
import Alert from '../popups/Alert';
import Container from '../container/MUIContainer';
import SaveIcon from '@material-ui/icons/Save';
import { useStyles } from '../add/StylesAdd';

import Button from '@material-ui/core/Button';



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
                    <Form className={classes.formadd}>
                        <Container className={classes.fieldContainer}>                      
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
                        </Container>                                               
                        <Container>                                                
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}
                                endIcon={<SaveIcon />}
                            >
                                {t('general.add')}
                            </Button>                            
                        </Container> 
                    </Form>
                )}                
            </Formik>
        
        </>
    )
}