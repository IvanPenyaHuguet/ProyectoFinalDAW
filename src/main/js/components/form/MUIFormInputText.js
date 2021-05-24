import React from 'react';

import { TextField } from 'formik-material-ui';
import { Field } from 'formik';

export default function MUIFormInputText ({label, name, type="text", ...props}) {

    
    return (
        <Field
            component={TextField}
            name={name}
            label={label}
            type={type}
            { ...props }
        >
        </Field>       
    )
}