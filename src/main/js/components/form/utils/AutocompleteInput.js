import React from 'react';

import { Field } from 'formik';
import { Autocomplete } from 'formik-material-ui-lab';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function AutocompleteInput ( { label, name, options, width = 300, ...props }) {    

    return (
        <Field 
            name={name}
            component={Autocomplete}
            options={options}
            getOptionLabel={(option) => option.name ? option.name : option}
            style={{ width: width }}
            autoHighlight
            autoComplete            
            id={`id-autocomplete-${label}`}
            renderInput={(params) => (
                <TextField
                    {...params}                
                    label={label}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment:(
                          <>
                            {props.loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                          </>
                        )
                    }}              
                />
            )}
            { ...props }       
        />
    )
}