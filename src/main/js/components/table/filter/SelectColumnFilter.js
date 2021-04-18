import React, {  useState, useEffect} from'react';

import ListIcon from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



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

export default function SelectColumnFilter ({ filter, setFilter, labelname , store }) {    
    
    const { t } = useTranslation();
    const [ anchorEl, setAnchorEl ] = useState(null);
    const classes = useStyles();
    const [items, setItems] = useState([])

    const onSelectChange = (e) => {      
        setFilter(e.target.value || undefined);
    }
    const onClick = (e) => {
        setAnchorEl(e.currentTarget);        
    };
    const onCloseClick = () => {
        setAnchorEl(null);
    }
    useEffect( () => {
        if (store) {
            setItems(store.map( (col ) => {
                return (        
                    <MenuItem key={col.id} value={col.id}>{col.name}</MenuItem>
                )
            }));            
        }       
    }, [store])
         
    
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
                        <InputLabel id={`label${labelname}`}>{labelname}</InputLabel>
                        <Select    
                        labelId={`label${labelname}`}
                        id={`select${labelname}`}                           
                        value={filter}
                        onChange={onSelectChange}
                        >         
                            <MenuItem value="0">{t("all")}</MenuItem>                           
                            { items } 
                        </Select>
                    </FormControl>                   
                </Paper> 
            </Popover>
        </Container>
    )
}