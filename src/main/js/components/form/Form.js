import React from 'react';

import { Form } from 'formik';

export default function FormikForm (props) {
    const { children, ... other } = props;
    return(
        <Form { ...other }>
            { children }
        </Form>
    )
}