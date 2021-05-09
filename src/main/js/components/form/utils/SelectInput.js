import React from 'react';

import { Field } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { Select } from 'formik-material-ui';


export default function SelectInput ({label, name, values}) {

    const menuItems = values.map( (item, ind) => {        
        return <MenuItem key={ item.viewOrder ? item.viewOrder : ind } value={ item.id }>{item.name}</MenuItem>
    })

    return (
        <FormControl>
            <InputLabel htmlFor={`'input-'${name}`}>{label}</InputLabel>
            <Field
                component={Select}
                name={name}
                inputProps={{
                    id: 'input-'+name,
                }}
            >
                { menuItems }
            </Field>
        </FormControl>
    )
}