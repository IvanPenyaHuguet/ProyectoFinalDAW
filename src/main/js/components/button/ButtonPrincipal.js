import React from 'react';

import Button from '@material-ui/core/Button';

export default function ButtonPrincipal (props) {
    const { children, variant='outlined'} = props;

    return (
        <Button variant={variant} {...props} >
            { children }
        </Button>
    )
}