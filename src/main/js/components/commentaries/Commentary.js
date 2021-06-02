import React from 'react';
import dayjs from 'dayjs';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { red } from '@material-ui/core/colors';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {

    },      
    avatar: {
      backgroundColor: red[600],
    },
  }));

export default function Commentary ({ comment }){

    const classes = useStyles();    
    const { user, commentary, creationDate } = comment;

    return (
        <Card variant='outlined' className={classes.card}>
            <CardHeader 
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {user.name.toUpperCase().charAt(0)}
                    </Avatar>
                }
                title={user.name + ' ' + user.surname}
                subheader={dayjs(creationDate).format('ddd, D [of] MMM [of] YYYY')}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    { commentary }
                </Typography>
            </CardContent>
        </Card>
    )
}