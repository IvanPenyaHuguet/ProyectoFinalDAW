import React from 'react';

import { Field } from 'formik';
import { SimpleFileUpload } from 'formik-material-ui';

export default function ImageInput ({ name, label }){

    return (
        <Field component={SimpleFileUpload} name={name} label={label} />
    )
}