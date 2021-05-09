import React from 'react';

import { Field } from 'formik';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';


export default function DateInput ( { label, name, ...props }) {     

    return (
        <Field
            component={KeyboardDatePicker}
            name={name}
            label={label}
            format="DD/MM/YYYY"
            variant="inline"
            { ...props }
        >
        </Field>            
        
    )
}