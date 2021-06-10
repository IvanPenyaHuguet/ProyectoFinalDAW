import React, { useState, useContext } from 'react';
import { Formik } from 'formik';

import { useHistory } from "react-router-dom";
import Form from '../form/Form';
import FormInputText from '../form/MUIFormInputText';
import OrganicReagent from '../../lib/entities/OrganicReagent';
import DateInput from '../form/DateInput';
import { useTranslation } from 'react-i18next';
import LocationInput from '../form/LocationInput';
import SuppliersInput from '../form/SuppliersInput';
import ElementsInput from '../form/utils/ElementsInput';
import Alert from '../popups/Alert';
import Container from '../container/MUIContainer';
import RefMaskInput from '../form/RefMaskInput';
import { ElementStore } from '../../context/store/ElementStore';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { useStyles } from './StylesAdd';

import Button from '@material-ui/core/Button';
import IntRefInput from '../form/IntRefInput';



export default function OrganicReagentAddFormat () {

    const organicReagent = new OrganicReagent();    
    
    const elements  = useContext(ElementStore);
    const [ alert, setAlert ] = useState(false);
    const [ refMask, setRefMask ] = useState('');
    organicReagent.getInitialValue();    
    const { t } = useTranslation();  
    const history = useHistory();
    const classes = useStyles();    

    const onReturnClick = () => {
        history.goBack();
    };    

    return (
        <>
            { alert && <Alert open={alert ? true : false} setOpen={setAlert} type={alert.type}>{alert.message}</Alert> }
            <Formik
                initialValues={organicReagent.getValues()}
                validationSchema={organicReagent.getValidationSchema(t)}                
                onSubmit= {(values, { setSubmitting , resetForm }) => {                    
                    organicReagent.addReagent(values, setSubmitting, setAlert, elements);
                    resetForm(organicReagent.getValues());
                }}
            >
                { ({ submitForm, isSubmitting, values }) => (
                    <Form className={classes.formadd}>
                        <Container className={classes.fieldContainer}>                        
                            <RefMaskInput value={refMask} setValue={setRefMask} />
                            <IntRefInput mask={refMask} />                        
                            <FormInputText 
                                label={t('form.add.spanishname')}                                
                                name="name"   
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
                            <SuppliersInput values={values}/>                     
                            <FormInputText 
                                label={t('form.add.quantity')}
                                name="quantity"  
                                className={classes.small}  
                            />
                            <FormInputText 
                                label={t('form.add.molecularWeight')}                               
                                name="molecularWeight"                             
                            />
                            <DateInput 
                                label={t('form.add.entryDate')}                             
                                name="entryDate"   
                            /> 
                            <FormInputText 
                                label={t('form.add.secintref')}
                                name="secondaryIntReference"   
                            />
                        </Container>
                        <ElementsInput values={values}/>
                        <Container className={classes.buttonContainer}> 
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