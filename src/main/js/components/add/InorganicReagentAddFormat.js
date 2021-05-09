import React, { useState, useContext } from 'react';
import { Formik , Field } from 'formik';

import Form from '../form/Form';
import FormInputText from '../form/MUIFormInputText';
import InorganicReagent from '../../lib/entities/InorganicReagent';
import DateInput from '../form/DateInput';
import { AuthContext } from '../../context/AuthContextProvider';
import { useTranslation } from 'react-i18next';
import LocationInput from '../form/LocationInput';
import UtilizationInput from '../form/UtilizationInput';
import SuppliersInput from '../form/SuppliersInput';
import ElementsInput from '../form/utils/ElementsInput';
import Alert from '../popups/Alert';

import Button from '@material-ui/core/Button';



export default function InorganicReagentAddFormat () {

    const inorganicReagent = new InorganicReagent();
    
    const { user } = useContext(AuthContext);
    const [ alert, setAlert ] = useState(false);
    inorganicReagent.getInitialValue(user.user);    
    const { t } = useTranslation();    


    return (
        <>
            { alert && <Alert open={alert ? true : false} setOpen={setAlert} type={alert.type}>{alert.message}</Alert> }
            <Formik
                initialValues={inorganicReagent.getValues()}
                validationSchema={inorganicReagent.getValidationSchema()}                
                onSubmit= {(values, { setSubmitting }) => inorganicReagent.addReagent(values, setSubmitting)}
            >
                { ({ submitForm, isSubmitting, values }) => (
                    <Form>
                        <FormInputText 
                            label={t('form.add.internalreference')}                               
                            name="internalReference"                                                       
                        />
                        <FormInputText 
                            label={t('form.add.spanishname')}                                
                            name="spanishName"   
                        />
                        <FormInputText 
                            label={t('form.add.englishName')} 
                            name="englishName"   
                        />
                        <FormInputText 
                            label={t('form.add.cas')}
                            name="cas"   
                        />
                        <LocationInput />
                        <UtilizationInput />    
                        <SuppliersInput />                     
                        <FormInputText 
                            label={t('form.add.quantity')}
                            name="quantity"    
                        />
                        <FormInputText 
                            label={t('form.add.molecularWeight')}                               
                            name="molecularWeight"   
                        />
                        <DateInput 
                            label={t('form.add.entryDate')}                             
                            name="entryDate"   
                        />   
                        <ElementsInput values={values}/>                      
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            {t('general.add')}
                        </Button>
                    </Form>
                )}                
            </Formik>
        </>
    )
}