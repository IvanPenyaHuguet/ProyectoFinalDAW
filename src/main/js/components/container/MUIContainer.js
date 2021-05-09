import React from 'react';

import MUIContainer from '@material-ui/core/Container';


export default function Container (props) {

    return (
        <MUIContainer { ...props }>
            { props.children }
        </MUIContainer>
    )
}