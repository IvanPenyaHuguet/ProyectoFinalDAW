import React, { useContext } from 'react';

import Container from '../../container/BoxContainer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from "react-i18next";
import Divider from '@material-ui/core/Divider';

import ESFlag from '../../icons/ESFlag';
import USFlag from '../../icons/USFlag';

import { LocalizationContext } from '../../../context/LocalizationContext';

const useStyles = makeStyles((theme) => ({
    group: {
        display: 'flex',
        color: 'white',
        margin: '0 30px',
    },
    divider: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: '1px'        
    }    
}));

export default function ChangeLanguage() {
    
    const { setLanguage } = useContext(LocalizationContext);
    const { t } = useTranslation();
    const classes = useStyles();
    
    const onESClick = () => {
        setLanguage('es');
    }

    const onUSClick = () => {
        setLanguage('en');
    }

    return (
        <Container className={classes.group}>
            <Tooltip title={t('general.spanish')}>
                <IconButton onClick={onESClick} aria-label={t('general.spanish')}>
                    <ESFlag width={'35px'} height={'30px'}/>
                </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem className={classes.divider} />
            <Tooltip title={t('general.english')} aria-label="delete">
                <IconButton onClick={onUSClick} aria-label={t('general.english')} >
                    <USFlag width={'45px'} height={'40px'}/>
                </IconButton>
            </Tooltip>
        </Container>
    )
}