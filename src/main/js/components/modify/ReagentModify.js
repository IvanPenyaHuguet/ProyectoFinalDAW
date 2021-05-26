import React, { useState, useContext, useEffect } from 'react';
import { Formik } from 'formik';


import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

import InorganicReagent from '../../lib/entities/InorganicReagent';
import FormInputText from '../form/MUIFormInputText';
import Form from '../form/Form';
import IntRefInput from '../form/IntRefInput';
import ButtonPrincipal from '../button/ButtonPrincipal';
import LocationInput from '../form/LocationInput';
import UtilizationInput from '../form/UtilizationInput';
import SuppliersInput from '../form/SuppliersInput';
import ElementsInput from '../form/utils/ElementsInput';
import RefMaskInput from '../form/RefMaskInput';
import DateInput from '../form/DateInput';

import { ElementStore } from '../../context/store/ElementStore';

import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({    
    container: {
       
    },
    title: {
        textAlign: 'center',
        fontSize: '25px'
    },
    containertitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fab: {
        margin: '0 20px',
        width: '36px',    
        maxWidth: '36px',
        height: '36px',
        maxHeight: '36px'
    },
    icon: {
        height: '25px',        
    }
}));


export default function ReagentModify ({ row, setOpen, setAlert }) {
    
    const inorganicReagent = new InorganicReagent(); 
    const { t } = useTranslation();
    const classes = useStyles();
    const [ loading, setLoading ] = useState(true); 
       
    for ( const item in row) {
        if (row[item] === null)
            row[item] = undefined;
    };
    const initialValues = {        
        ...row,
        location: JSON.stringify(row.location),
        suppliers: row.suppliers.map(val => JSON.stringify(val))
    }   
    

    const handleClose = () => {
        setOpen(false);
    }

    const onDeleteClick = () => {

    }    

    return (
        <Container className={classes.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={inorganicReagent.getValidationSchema(t)}                
                onSubmit= {(values, { setSubmitting }) => {                    
                    inorganicReagent.addReagent(values, setSubmitting, setAlert )
                }}
            >
            { ({ submitForm, isSubmitting, values }) => (
                <Form>
                    <Container className={classes.containertitle}>
                        <FormInputText 
                            label=''
                            name={row.name ? 'name' : 'spanishName'}  
                            className={classes.title} 
                            inputProps={{ 'aria-label': 'naked' }}
                        />                        
                    </Container>
                    <Divider />
                    <Container>
                        <Container>                            
                            <FormInputText 
                                name="internalReference"
                                label={t('form.add.internalreference')}    
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
                        </Container>
                        <Container>
                            <ButtonPrincipal color='default' onClick={handleClose}>{t('general.close')}</ButtonPrincipal>                              
                            <ButtonPrincipal color='secondary' onClick={onDeleteClick} startIcon={<DeleteIcon />}>{t('general.delete')}</ButtonPrincipal>
                            <ButtonPrincipal 
                                color='primary' 
                                disabled={isSubmitting}
                                onClick={submitForm}
                                endIcon={<SaveIcon />}
                            >
                                {t('general.save')}
                            </ButtonPrincipal>
                        </Container>    
                    </Container>
                </Form>
            )}                
            </Formik>
        </Container>
    )
}