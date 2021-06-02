import React from 'react';
import Typography from '@material-ui/core/Typography';



export default function Title(props) {
    const { variant='h3', component='h2', children } = props;
    
    
    return(<Typography variant={variant} component={component} {...props} >{ children }</Typography>);
}