import React from 'react';
import i18n from "i18next";

import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from "react-i18next";

import ESFlag from '../../icons/ESFlag';
import USFlag from '../../icons/USFlag';

const useStyles = makeStyles((theme) => ({
    group: {
      color: 'white',
      margin: '0 30px'
    },    
}));

export default function ChangeLanguage() {
    
    const { t } = useTranslation();
    const classes = useStyles();

    const onESClick = () => {
        i18n.changeLanguage('es-ES');
    }

    const onUSClick = () => {
        i18n.changeLanguage('en-US');
    }

    return (
        <ButtonGroup size='large' variant="text" color='secondary' className={classes.group} aria-label="Change language">
            <Tooltip title={t('general.spanish')}>
                <IconButton onClick={onESClick}>
                    <ESFlag width={'35px'} height={'30px'}/>
                </IconButton>
            </Tooltip>
            <Tooltip title={t('general.english')}>
                <IconButton onClick={onUSClick}>
                    <USFlag width={'45px'} height={'40px'}/>
                </IconButton>
            </Tooltip>
        </ButtonGroup>
    )
}