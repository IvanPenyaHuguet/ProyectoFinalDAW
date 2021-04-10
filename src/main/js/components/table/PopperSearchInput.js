import React, { useState, useEffect, useRef } from 'react';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from '@material-ui/core/Popover';


import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({         
    icon: {
        height: "35px",
        width: "35px"
    },
    button: {
        zIndex: "1000",
        background: "white",
        position: "relative"
    },
    paper: {
        zIndex: "1000",
    }
}));


export default function PopperSearchInput ({ handleCloseShowColumn, showColumnSelector }) {

    const { t } = useTranslation();

    const classes = useStyles();
    const items = [{
        value: "spanishName",
        name: t('table.column.spanishName'),
        selected: true
    },{
        value: "englishName",
        name: t('table.column.englishName'),
        selected: true
    },{
        value: "cas",
        name: t('table.column.cas'),
        selected: false
    },{
        value: "internalReference",
        name: t('table.column.reference'),
        selected: true
    },{
        value: "molecularWeight",
        name: t('table.column.molecularWeight'),
        selected: false
    }];
    const [ columns, setColumns ] = useState (items);  
    const open = Boolean(showColumnSelector); 
    const id = open ? 'popover-search' : undefined;

    const switches = columns.map( (col, index) => {
        <ListItem key={index} role={undefined} dense button onClick={() => {}}>
            <ListItemIcon>                                
                <Checkbox
                    edge="start"                               
                    disableRipple
                    inputProps={{ 'aria-labelledby': col.name}}                    
                />
            </ListItemIcon>
            <ListItemText primary={col.name} />                        
        </ListItem>
    });
    

    return(
        <Popover anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        open={open} anchorEl={showColumnSelector} onClose={handleCloseShowColumn} id={id}>
            <Paper >
                <ClickAwayListener onClickAway={handleCloseShowColumn}>
                    <MenuList autoFocusItem={open.current} >                    
                        { switches }
                        <ListItem role={undefined} dense button onClick={() => {}}>
                            <ListItemIcon>                                
                                <Checkbox
                                    edge="start"                               
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': "aaa"}}                    
                                />
                            </ListItemIcon>
                            { console.log ("showing")}
                            <ListItemText primary={"aaaa"} />                        
                        </ListItem>
                    </MenuList>
                </ClickAwayListener>
            </Paper> 
        </Popover>
    )
}