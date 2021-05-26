import React, { useState } from 'react';
import { Formik } from 'formik';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

import InorganicReagent from '../../lib/entities/InorganicReagent';
import FormInputText from '../form/MUIFormInputText';
import Form from '../form/Form';
import ButtonPrincipal from '../button/ButtonPrincipal';
import LocationInput from '../form/LocationInput';
import UtilizationInput from '../form/UtilizationInput';
import SuppliersInput from '../form/SuppliersInput';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({    
    container: {
       height: '100%',
       width: '100%'
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content: {
        width: '100%'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
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
                <Form className={classes.form}>
                    <DialogTitle className={classes.containertitle} id="dialog-title">
                        <FormInputText 
                            label=''
                            name={row.name ? 'name' : 'spanishName'}  
                            className={classes.title} 
                            inputProps={{ 'aria-label': 'naked' }}
                        />                        
                    </DialogTitle>                   
                    <DialogContent dividers className={classes.content}>                            
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
                    </DialogContent>
                    <DialogActions className={classes.actions}>
                        <ButtonPrincipal color='default' onClick={handleClose} startIcon={<CloseIcon />}>{t('general.close')}</ButtonPrincipal>                              
                        <ButtonPrincipal color='secondary' onClick={onDeleteClick} endIcon={<DeleteIcon />}>{t('general.delete')}</ButtonPrincipal>
                        <ButtonPrincipal 
                            color='primary' 
                            disabled={isSubmitting}
                            onClick={submitForm}
                            endIcon={<SaveIcon />}
                        >
                            {t('general.save')}
                        </ButtonPrincipal>
                    </DialogActions>   
                </Form>
            )}                
            </Formik>
        </Container>
    )
}