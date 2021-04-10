import React, { useEffect, useRef, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
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
    const [checked, setChecked] = React.useState([0]);

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
            <Popper open={showColumnSelector} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.button}>
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                style={{ tranformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                <Paper>
                    <ClickAwayListener onClickAway={handleCloseShowColumn}>
                    <MenuList autoFocusItem={showColumnSelector} id="menu-list-grow" >
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
                    </ClickAwayListener>
                </Paper>
                </Grow>
            )}
            </Popper>
        </>
    )
}