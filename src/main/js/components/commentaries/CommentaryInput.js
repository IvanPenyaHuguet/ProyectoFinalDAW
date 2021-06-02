import React, { useState } from 'react';
import dayjs from 'dayjs';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { red } from '@material-ui/core/colors';

import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import CommentaryService from '../../service/backend/CommentaryService';

const useStyles = makeStyles((theme) => ({    
    avatar: {
      backgroundColor: red[600],
    },
  }));

export default function CommentaryInput ({id , setAlert}){

    const { t } = useTranslation();
    const classes = useStyles();    
    const [ commentary, setCommentary ] = useState('');

    const handleChange = (e) => {
        setCommentary(e.target.value);
    }

    const onCleanClick = (e) => {
        setCommentary('');
    }

    const onSendClick = (e) => {
        CommentaryService.saveCommentary(id, commentary)
        .then ( res => 
            res.status == 200 ? 
            setAlert({
                type: 'success' , 
                message: t('form.commentary.success')
            })
            :
            setAlert({
                type: 'error' , 
                message: t('form.commentary.failure')
            })
        )
    }

    return (
        <Card variant='outlined'>
            <CardHeader
                title={t('form.commentary.title')}                
            />
            <CardContent>
                <TextField                                      
                    multiline
                    rows={4}
                    value={commentary}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={onCleanClick}>
                    {t('general.clean')}
                </Button>
                <Button size="small" color="primary" onClick={onSendClick}>
                    {t('general.send')}
                </Button>                
            </CardActions>
        </Card>
    )
}