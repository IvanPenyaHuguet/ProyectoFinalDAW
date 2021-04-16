import React, {  useContext } from 'react';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from '@material-ui/core/Popover';


import { SearchFieldContext } from '../../../context/SearchFieldContext';


export default function PopperSearchInput ({ handleCloseShowColumn, showColumnSelector }) {

    const {fieldsToSearch, setFieldsToSearch} = useContext(SearchFieldContext);    
    const open = Boolean(showColumnSelector); 
    const id = open ? 'popover-search' : undefined;    
    
    const onCheckBoxClick = index => {  
        return e => {                
            setFieldsToSearch( fieldsToSearch.map( (column, ind) => (
                ind === index
                    ? { ...column, selected: !column.selected}
                    : column
            )));
        }
    }

    const switches = fieldsToSearch.map( (col, index) => {
        return (
        <ListItem key={index} role={undefined} dense button onClick={onCheckBoxClick(index)}>
            <ListItemIcon>                                
                <Checkbox
                    edge="start"                               
                    disableRipple
                    inputProps={{ 'aria-labelledby': col.name}}
                    checked={col.selected}                    
                />
            </ListItemIcon>
            <ListItemText primary={col.name} />                        
        </ListItem>
        )
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
                    </MenuList>
                </ClickAwayListener>
            </Paper> 
        </Popover>
    )
}