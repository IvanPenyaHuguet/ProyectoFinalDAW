import React from 'react';

import { useFormikContext, Field } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import { Select } from 'formik-material-ui';


export default function SelectInput ({label, name, store}) {

    const { touched, errors } = useFormikContext(); 

    const menuItems = store.map( (item, ind) => {        
        return <MenuItem key={ item.viewOrder ? item.viewOrder : ind } value={ JSON.stringify(item) }>{item.name}</MenuItem>
    })

    return (
        <FormControl error= {touched[name] && errors[name] ? true : false}>
            <InputLabel htmlFor={`'input-'${name}`}>{label}</InputLabel>
            <Field
                component={Select}
                name={name}
                inputProps={{
                    id: 'input-'+name,
                }}
                aria-describedby={`error-${name}`}
            >
                { menuItems }
            </Field>
            {errors[name] && touched[name] && <FormHelperText id={`error-${name}`}>{errors[name]}</FormHelperText>}
        </FormControl>
    )
}