import React, { useEffect, useRef, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';

import FilterListIcon from '@material-ui/icons/FilterList';
import AllColumnMenuSelector from './AllColumnMenuSelector';

import { useTranslation } from 'react-i18next';


export default function MenuColumnSelector ({ allColumns, getToggleHideAllColumnsProps, classes, toggleHideAllColumns }) {

    const { t } = useTranslation();
    const [ showColumnSelector , setShowColumnSelector ] = useState(false);
    const prevOpen = useRef(showColumnSelector);   
    const anchorRef = useRef(null);  
    const idn = showColumnSelector ? 'columnselector' : undefined;    

    const onButtonShowColumn = (e) => {
        setShowColumnSelector((prevOpen) => !prevOpen);
    };

    const handleCloseShowColumn = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }    
        setShowColumnSelector(false);
    };
    
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
          anchorRef.current.focus();
        }    
        prevOpen.current = showColumnSelector;
    }, [showColumnSelector]);


    return (
        <>
            <Tooltip title={t('table.tooltip.mostrarCol')}>
                    <IconButton aria-label={t('table.tooltip.mostrarCol')} onClick={onButtonShowColumn} ref={anchorRef}>
                        <FilterListIcon className={classes.icon}/>
                    </IconButton>
            </Tooltip>
            <Popover anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={showColumnSelector} anchorEl={anchorRef.current} onClose={handleCloseShowColumn} id={idn}>           
                <Paper>                    
                    <MenuList autoFocusItem={showColumnSelector} id="menu-columns-grow" >
                    <AllColumnMenuSelector {...getToggleHideAllColumnsProps()} toggleHideAllColumns={toggleHideAllColumns}/>
                    {allColumns.map((column) => (
                        <ListItem key={column.id} role={undefined} dense button onClick={() => column.toggleHidden()}>
                            <ListItemIcon>                                
                            <Checkbox
                                edge="start"                               
                                disableRipple
                                inputProps={{ 'aria-labelledby': column.Header}}
                                {...column.getToggleHiddenProps()}
                            />
                            </ListItemIcon>
                            <ListItemText id={column.id} primary={column.Header} />                        
                        </ListItem>                        
                        ))}
                    </MenuList>                    
                </Paper>                         
            </Popover>
        </>
    )
}