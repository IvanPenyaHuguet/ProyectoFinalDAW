import React, { useState, useContext } from 'react';
import { Formik } from 'formik';

import { useHistory } from "react-router-dom";
import Form from '../form/Form';
import FormInputText from '../form/MUIFormInputText';
import InorganicReagent from '../../lib/entities/InorganicReagent';
import DateInput from '../form/DateInput';
import { useTranslation } from 'react-i18next';
import LocationInput from '../form/LocationInput';
import UtilizationInput from '../form/UtilizationInput';
import SuppliersInput from '../form/SuppliersInput';
import ElementsInput from '../form/utils/ElementsInput';
import Alert from '../popups/Alert';
import Container from '../container/MUIContainer';
import RefMaskInput from '../form/RefMaskInput';
import { ElementStore } from '../../context/store/ElementStore';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';

import Button from '@material-ui/core/Button';
import IntRefInput from '../form/IntRefInput';



export default function InorganicReagentAddFormat () {

    const inorganicReagent = new InorganicReagent();    
    
    const elements  = useContext(ElementStore);
    const [ alert, setAlert ] = useState(false);
    const [ refMask, setRefMask ] = useState('');
    inorganicReagent.getInitialValue();    
    const { t } = useTranslation();  
    const history = useHistory();    

    const onReturnClick = () => {
        history.goBack();
    };    

    return (
        <>
            { alert && <Alert open={alert ? true : false} setOpen={setAlert} type={alert.type}>{alert.message}</Alert> }
            <Formik
                initialValues={inorganicReagent.getValues()}
                validationSchema={inorganicReagent.getValidationSchema(t)}                
                onSubmit= {(values, { setSubmitting }) => {                    
                    inorganicReagent.addReagent(values, setSubmitting, setAlert, elements)
                }}
            >
                { ({ submitForm, isSubmitting, values }) => (
                    <Form>                        
                        <RefMaskInput value={refMask} setValue={setRefMask} />
                        <IntRefInput mask={refMask} />                        
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
                        <SuppliersInput values={values}/>                     
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
                        <Container> 
                            <Button
                                variant="contained"
                                color="secondary"                            
                                onClick={onReturnClick}
                                startIcon={<BackspaceIcon />}
                            >
                                {t('general.return')}
                            </Button>                    
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