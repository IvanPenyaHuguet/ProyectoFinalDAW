import React from "react";

import Box from "@material-ui/core/Box";

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({    
    tablecontainer: {        
        height: 'calc(100% - 50px)',        
    },
    box: {        
        height: 'calc(100% - 85px)',        
    }     
}));

export default function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className={classes.tablecontainer}
        >
            {value === index && <Box className={classes.box} p={3}>{children}</Box>}
        </div>
    );
}
