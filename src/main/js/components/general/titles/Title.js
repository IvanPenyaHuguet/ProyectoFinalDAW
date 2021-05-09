import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({    
    root: {
      fontFamily: props => props.fontFamily || "'Roboto', sans-serif",    
    }    
}));


export default function Title(props) {
    const { variant='h2', component='h2', children } = props;
    const classes = useStyles(props);
    
    
    return(<Typography variant={variant} component={component} {...props} classes={{root: classes.root}} >{ children }</Typography>);
}