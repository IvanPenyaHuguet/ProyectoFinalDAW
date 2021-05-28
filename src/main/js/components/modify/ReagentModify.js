import React, { useContext } from 'react';
import { Formik } from 'formik';

import Container from '@material-ui/core/Container';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

import InorganicReagentModify from './InorganicReagentModify';
import OrganicReagentModify from './OrganicReagentModify';
import InorganicReagent from '../../lib/entities/InorganicReagent';
import OrganicReagent from '../../lib/entities/OrganicReagent';
import Form from '../form/Form';
import ButtonPrincipal from '../button/ButtonPrincipal';

import { TableContext  } from '../../context/utils/TableContext';

import DialogActions from '@material-ui/core/DialogActions';

import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({    
    container: {
       height: '100%',
       width: '100%'
    },   
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}));


export default function ReagentModify ({ row, setOpen, setAlert }) {
    
    
    const tableStrContext = row.reagentType == 'Organic' ? 'OrganicReagent' : useContext(TableContext); 
    
    const OPTIONS_CONTEXT = {
        InorganicReagent: () => new InorganicReagent(),           
        OrganicReagent:  () => new OrganicReagent()            
    }    
    const service = OPTIONS_CONTEXT[tableStrContext]();   
    const { t } = useTranslation();
    const classes = useStyles();    
       
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
        service.deleteReagent(row , setAlert);
        handleClose();
    }    

    return (
        <Container className={classes.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={service.getValidationSchema(t)}                
                onSubmit= {(values, { setSubmitting }) => {                    
                    service.addReagent(values, setSubmitting, setAlert )
                }}
            >
            { ({ submitForm, isSubmitting, values }) => (
                <Form className={classes.form}>
                    { tableStrContext === 'InorganicReagent' &&  <InorganicReagentModify row={row} setAlert={setAlert} values={values} />}
                    { tableStrContext === 'OrganicReagent' &&  <OrganicReagentModify row={row} setAlert={setAlert} values={values} />}
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