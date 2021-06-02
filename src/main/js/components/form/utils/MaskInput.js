import React from 'react';

import MaskComponent from './MaskComponent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({    
    mask: {
        width: '50px'         
    }    
}));

export default function MaskInput ({label, name, mask, field, meta, form, ...props}) {       
    
    const { touched, errors } = form;
    const classes = useStyles();     
    
    return (
        <FormControl error= {touched[field.name] && errors[field.name] ? true : false} className={classes.mask}>
            <InputLabel htmlFor={`'label'-${name}`} shrink>{label}</InputLabel>
            <Input   
                id="formatted-text-mask-input"
                inputComponent={MaskComponent}
                inputProps={{ mask: mask }}                
                mask={mask}   
                aria-describedby={`error-${name}`} 
                {...field}            
            />
            {errors[field.name] && touched[field.name] && <FormHelperText id={`error-${name}`}>{errors[field.name]}</FormHelperText>}
        </FormControl>
    )
}