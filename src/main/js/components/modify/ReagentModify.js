import React, { useContext } from 'react';
import { Formik } from 'formik';

import Container from '@material-ui/core/Container';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

import InorganicReagentModify from './InorganicReagentModify';
import OrganicReagentModify from './OrganicReagentModify';
import AqueousSolModify from './AqueousSolModify';
import OrganicSolModify from './OrganicSolModify';
import InorganicReagent from '../../lib/entities/InorganicReagent';
import OrganicReagent from '../../lib/entities/OrganicReagent';
import AqueousSol from '../../lib/entities/AqueousSol';
import OrganicSol from '../../lib/entities/OrganicSol';
import Form from '../form/Form';
import ButtonPrincipal from '../button/ButtonPrincipal';

import { TableContext  } from '../../context/utils/TableContext';

import DialogActions from '@material-ui/core/DialogActions';

import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import autoprefixer from 'autoprefixer';


const useStyles = makeStyles((theme) => ({    
    container: {
       height: '100%',
       width: '100%', 
       overflow: 'hidden'      
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
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: '640px',
        height: '60px',
        width: '100%',
        backgroundColor: 'white'
    },
    content: {
        overflow: 'auto',
        margin: 0,
        padding: 0,
        height: '620px'
    }
}));


export default function ReagentModify ({ row, setOpen, setAlert, modify, setModify }) {
    
    const tableStrContext = row.reagentType == 'Organic' ? 'OrganicReagent' : useContext(TableContext); 
    
    const OPTIONS_CONTEXT = {
        InorganicReagent: () => new InorganicReagent(),           
        OrganicReagent:  () => new OrganicReagent(), 
        AqueousSol:  () => new AqueousSol(),
        OrganicSol:  () => new OrganicSol(),           
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
        setModify(modify+1);
        handleClose();
    }    

    return (
        <Container className={classes.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={service.getValidationSchema(t)}                
                onSubmit= {(values, { setSubmitting }) => {                    
                    service.addReagent(values, setSubmitting, setAlert);
                    setModify(modify+1);
                    handleClose();
                }}
            >
            { ({ submitForm, isSubmitting, values }) => (
                <Form className={classes.form}>
                    <Container className={classes.content}>
                        { tableStrContext === 'InorganicReagent' &&  <InorganicReagentModify row={row} setAlert={setAlert} values={values} />}
                        { tableStrContext === 'OrganicReagent' &&  <OrganicReagentModify row={row} setAlert={setAlert} values={values} />}
                        { tableStrContext === 'AqueousSol' &&  <AqueousSolModify row={row} setAlert={setAlert} values={values} />}
                        { tableStrContext === 'OrganicSol' &&  <OrganicSolModify row={row} setAlert={setAlert} values={values} />}
                    </Container>
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