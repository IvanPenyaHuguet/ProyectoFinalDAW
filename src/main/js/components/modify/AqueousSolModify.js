import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import FormInputText from '../form/MUIFormInputText';
import LocationInput from '../form/LocationInput';
import SuppliersInput from '../form/SuppliersInput';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({   
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
    content: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    small: {
        width: '40px'
    } 
}));

export default function AqueousSolModify ({ row, values, setAlert}) {

    const classes = useStyles(); 
    const { t } = useTranslation(); 
    
return (
        <>
            <DialogTitle className={classes.containertitle} id="dialog-title">
                <FormInputText 
                    label=''
                    name='name'  
                    className={classes.title} 
                    inputProps={{ 'aria-label': 'naked' }}
                />                        
            </DialogTitle>                   
            <DialogContent dividers className={classes.content}>                            
                <FormInputText 
                    name="internalReference"
                    label={t('form.add.internalreference')}    
                    className={classes.small} 
                />                      
                <LocationInput />                           
                <SuppliersInput values={values}/>                     
                <FormInputText 
                    label={t('form.add.concentration')}
                    name="concentration"    
                    className={classes.small} 
                />
                <FormInputText 
                    label={t('form.add.molecularWeight')}                               
                    name="molecularWeight"                             
                />                                   
            </DialogContent>
        </>
    )
}