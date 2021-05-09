import React from 'react';

import Box from '@material-ui/core/Box';


export default function Container (props) {

    return (
        <Box { ...props }>
            { props.children }
        </Box>
    )
}