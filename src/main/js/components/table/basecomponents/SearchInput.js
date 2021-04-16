import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';

import Container from '../../container/Container';
import PopperSearchInput from './PopperSearchInput';

import styles from '../../../css/components/table/SearchInput.module.css';
import { useTranslation } from 'react-i18next';
import { SearchTextContext } from '../../../context/SearchTextContext';

const useStyles = makeStyles((theme) => ({    
    container: {
      width: "100%",      
    },
    iconContainer: {
        width: "40px",
        height: "40px",
        margin: "0 5px 0 0"
    },
    icon: {
        width: "35px",
        height: "35px"
    },
    input: {
        width: "350px"
    }
}));

export default function SearchInput () {   
    const { t } = useTranslation();
    const classes = useStyles();
      
    const [ showColumnSelector , setShowColumnSelector ] = useState(null);
    const { textToSearch, setTextToSearch } = useContext(SearchTextContext);
    const [ inputSearchText, setInputSearchText ] = useState ('');    

    const onButtonShowColumn = (e) => {
        e.preventDefault();      
        setShowColumnSelector(e.currentTarget);              
    };

    const handleCloseShowColumn = (event) => {           
        setShowColumnSelector(null);
    };
    const onSearchClick = () => {
        setTextToSearch(inputSearchText)
    }
    const onInputSearchChange = (e) => {
        setInputSearchText(e.target.value);
    }    

    return (
        <Container className={styles.searchContainer}>
            <Box display="flex" alignItems="flex-end" flexDirection="row" justifyContent="center" className={classes.container}>
                <Tooltip title={t('table.tooltip.fieldSearch')}>
                    <IconButton  aria-label={t('table.tooltip.fieldSearch')} className={classes.iconContainer} onClick={onButtonShowColumn}>
                        <AddBoxIcon className={classes.icon} />
                    </IconButton>
                </Tooltip>
                <PopperSearchInput showColumnSelector={showColumnSelector} handleCloseShowColumn={handleCloseShowColumn} />
                <Box className={classes.input}>
                    <TextField label={t('table.label.searchInput')} className={classes.container} value={inputSearchText} onChange={onInputSearchChange}/>
                </Box>
                <Tooltip title={t('table.tooltip.search')}>
                    <IconButton aria-label={t('table.tooltip.search')} className={classes.iconContainer} onClick={onSearchClick}>
                        <SearchIcon className={classes.icon}/>
                    </IconButton>
                </Tooltip>
            </Box>
        </Container>
    )
}