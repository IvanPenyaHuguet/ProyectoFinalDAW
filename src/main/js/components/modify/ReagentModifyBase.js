import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import FormInputText from '../form/MUIFormInputText';
import LocationInput from '../form/LocationInput';
import SuppliersInput from '../form/SuppliersInput';
import ReagentCommentaries from '../commentaries/ReagentCommentaries';

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
    },
    medium: {
        width: '70px'
    }
}));

export default function ReagentModifyBase ({children, row, values, setAlert}) {

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
                <FormInputText 
                    label={t('form.add.englishName')} 
                    name="englishName"   
                />
                <FormInputText 
                    label={t('form.add.cas')}
                    name="cas"
                    className={classes.medium}    
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
                    className={classes.medium}                             
                />
                    { children }
                <ReagentCommentaries row={ row } setAlert={setAlert}/>
            </DialogContent>
        </>
    )
}