import React, { useState, useContext } from 'react';


import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';

import Container from '../../container/Container';
import MUIContainer from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PeriodicTable from '../../periodictable/PeriodicTable';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';

import { SearchElementsContext } from '../../../context/SearchElementsContext';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: "20px",
    },
    container: {
        margin: "20px auto 0",
        width: "400px",
        display: "flex",
        justifyContent: "space-between"
    },
    button: {
        width: "100px",
        margin: "0 0 0 0"
    }
}));

export default function SelectorPeriodicTable () {

    const { t } = useTranslation();
    const [ anchorEl, setAnchorEl ] = useState(null);
    const classes = useStyles();
    const { setElementsToSearch } = useContext(SearchElementsContext);
    const [ selectedElements, setSelectedElements ] = useState ({});

    const onClick = (e) => {
        setAnchorEl(e.currentTarget);        
    };
    const onCloseClick = () => {
        setAnchorEl(null);
    }
    const onSearchClick = (e) => {
        setElementsToSearch(selectedElements);
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'pertableele' : undefined;

    return (
        <Container>
            <Button variant="outlined" size="large" aria-describedby={id} onClick={onClick}>{t('table.button.searchElements')}</Button>
            <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={onCloseClick}                               
                elevation={24}                 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                >
                <Paper className={classes.root} elevation={0}>
                    <PeriodicTable selectedElements={selectedElements} setSelectedElements={setSelectedElements}/>
                    <MUIContainer className={classes.container}>
                        <Button size="medium" color="primary" className={classes.button} onClick={onSearchClick}><SearchIcon color="primary"/>{t('table.tooltip.search')}</Button>
                        <Button size="medium" color="secondary" className={classes.button} onClick={onCloseClick}><CancelIcon color="secondary"/>{t('general.close')}</Button>
                    </MUIContainer>                    
                </Paper>
            </Popover>           
        </Container>
    )
}