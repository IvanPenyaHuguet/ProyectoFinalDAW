import React, {  useState } from'react';

import ListIcon from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import FormControl from '@material-ui/core/FormControl';




import Container from '../../container/Container';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../css/components/table/filter/SelectColumn.module.css';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    }   
}));

export default function SelectColumnFilter ({ children }) {    
    
    const { t } = useTranslation();
    const [ anchorEl, setAnchorEl ] = useState(null);
    const classes = useStyles();

    const onClick = (e) => {
        setAnchorEl(e.currentTarget);        
    };
    const onCloseClick = () => {
        setAnchorEl(null);
    }         
    
    const open = Boolean(anchorEl);
    const idn = open ? 'pertableele' : undefined;    

    return (
        <Container className={styles.container}>
            <Tooltip title={t('table.filter')}>
                    <IconButton aria-label={t('table.filter')} onClick={onClick} aria-describedby={idn}>
                        <ListIcon />
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
            open={open} anchorEl={anchorEl} onClose={onCloseClick}  id={idn}>
                <Paper >                                                             
                    <FormControl className={classes.formControl}>
                        { children }
                    </FormControl>                   
                </Paper> 
            </Popover>
        </Container>
    )
}