import React, { useState } from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonPrincipal from '../../button/ButtonPrincipal';

import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: 2000
    },
    paper:{
        width: '1000px',
        minWidth: '800px',
        height: '700px',
        minHeight: '600px',
        overflow: 'auto',
        padding: '10px 20px'        
    },
    container: {
       
    },
    title: {
        textAlign: 'center',
    },
    containertitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fab: {
        margin: '0 20px',
        width: '36px',    
        maxWidth: '36px',
        height: '36px',
        maxHeight: '36px'
    },
    icon: {
        height: '25px',        
    }
}));


export default function ModifyRowTable({row , setOpen}) {

    console.log(row);
    const { t } = useTranslation();
    const classes = useStyles();
    const [ loading, setLoading ] = useState(true);
    const [ titleEditable, setTitleEditable] = useState(false);
    const open = row !== false;
    

    const handleClose = () => {
        setOpen(false);
    }

    const onTitleEditClick = e => {
        setTitleEditable(true);
    }

    return (
        <Backdrop open={open} className={classes.backdrop} >            
                {/* <CircularProgress color="inherit" /> */}
            <ClickAwayListener onClickAway={handleClose}>
                <Paper elevation={8} className={classes.paper}>
                    <Container className={classes.container}>
                        <Container className={classes.containertitle}>
                            <Typography className={classes.title} variant="h3" component="h3">
                                { row.name ? row.name.toUpperCase() : row.spanishName.toUpperCase() }
                            </Typography>
                            <Tooltip title={t('general.edit')} aria-label={t('general.edit')}>
                                <Fab size="small" color="secondary" aria-label={t('general.edit')} className={classes.fab} onClick={onTitleEditClick}>
                                    <EditIcon className={classes.icon}/>
                                </Fab>
                            </Tooltip>
                        </Container>
                        <Divider />
                        <Container>


                            <Container>
                                <ButtonPrincipal color='primary'>{t('general.save')}</ButtonPrincipal>  
                                <ButtonPrincipal color='secondary'>{t('general.close')}</ButtonPrincipal>    
                            </Container>    
                        </Container>
                    </Container>
                </Paper>  
            </ClickAwayListener>              
        
        </Backdrop>
    )
}



