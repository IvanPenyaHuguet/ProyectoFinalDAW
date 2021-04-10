import React from 'react';

import MUIToolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import MenuColumnSelector from './MenuColumnSelector';
import SearchInput from './SearchInput';


export default function Toolbar ({ allColumns, getToggleHideAllColumnsProps, title, toggleHideAllColumns }) {
    const useToolbarStyles = makeStyles((theme) => ({
        root: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(1),
        },        
        title: {
          flex: '1 1 100%',
          fontSize: "2rem",
        },
        icon: {
            height: "35px",
            width: "35px"
        },
        button: {
            zIndex: "1000",
            background: "white",
            position: "relative"
        }
    }));
    const classes = useToolbarStyles();
    
    
    

    return (
        <MUIToolbar className={classes.root}>
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                {title}
            </Typography>
            <SearchInput />            
            <MenuColumnSelector 
                allColumns={allColumns}
                getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
                toggleHideAllColumns={toggleHideAllColumns}
                classes={classes}
            />
        </MUIToolbar>
    )
}