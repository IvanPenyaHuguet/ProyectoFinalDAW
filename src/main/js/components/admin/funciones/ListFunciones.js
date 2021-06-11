import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({    
    tablecontainer: {
        width: 400,
        height: 450,        
        overflow: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '250px',
            height: '300px'
        },     
    }    
}));

export default function Funciones ({ roles, checked, setChecked }) {

    const classes = useStyles();
 
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }    
        setChecked(newChecked);
    };

    return (
        <Paper className={classes.tablecontainer}>
            <List dense component="div" role="list">
                {roles.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <ListItem key={value.id} role="listitem" button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value.description} />
                        </ListItem>
                    );
                })}
            </List>            
        </Paper>
    )
}