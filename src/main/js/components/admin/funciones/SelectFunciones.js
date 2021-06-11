import React, { useState , useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import UserService from '../../../service/backend/Services/UserService';

import ListFunciones from './ListFunciones.js';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({ 
    root: {
        margin: 'auto',
    },   
    tablecontainer: {
        margin: '20px 0',
        display: 'flex',
        height: '100%'        
    },
    button: {
        margin: theme.spacing(0.5, 0),
    }, 
}));

function intersection(a, b) {
    const bId = b.map(val => val.id);
    return a.filter((value) => bId.indexOf(value.id) !== -1);
}

function not(a, b) {
    const bId = b.map(val => val.id);
    return a.filter((value) => bId.indexOf(value.id) === -1);
}



export default function Funciones ({ user , setUser, allRoles }) {

    const classes = useStyles();
    const [left, setLeft] = useState([]);
    const [right, setRight] = useState([]);
    const [checked, setChecked] = useState([]); 
    const [ submitting, setSubmitting ] = useState(false); 
    const { t } = useTranslation();  
    
    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };
    
    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };

    useEffect(() => {
        setRight(user.role);
        setLeft(not(allRoles, user.role));        
    }, [user]);

    useEffect(() => {        
        if ( user.role.length != right.length && right.length != 0) {
            setSubmitting(true);
            const newUser = {...user};
            newUser.role = right;            
            UserService.save(newUser)
            .then(res => {
                setUser(res.data);
                setSubmitting(false);
            }) 
        }               
    },[right]);

    return (
        <Paper className={classes.tablecontainer} elevation={3}>
            <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
                <Grid item>
                    <Typography variant="h5" gutterBottom>
                        {t('admin.funciones.selectfunciones.rolestoassign')}
                    </Typography>
                    <ListFunciones roles={left} checked={checked} setChecked={setChecked}/> 
                </Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                        <Button
                            variant="outlined"
                            size="small"
                            className={classes.button}
                            onClick={handleAllRight}
                            disabled={left.length === 0}
                            aria-label="move all right"
                            disabled={submitting}
                        >
                            ≫
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            className={classes.button}
                            onClick={handleCheckedRight}
                            disabled={leftChecked.length === 0}
                            aria-label="move selected right"
                            disabled={submitting}
                        >
                            &gt;
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            className={classes.button}
                            onClick={handleCheckedLeft}
                            disabled={rightChecked.length === 0}
                            aria-label="move selected left"
                            disabled={submitting}
                        >
                            &lt;
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            className={classes.button}
                            onClick={handleAllLeft}
                            disabled={right.length === 0}
                            aria-label="move all left"
                            disabled={submitting}
                        >
                            ≪
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="h5" gutterBottom>
                        {t('admin.funciones.selectfunciones.userroles')}
                    </Typography>
                    <ListFunciones roles={right} checked={checked} setChecked={setChecked} /> 
                </Grid>
            </Grid>                      
        </Paper>
    )
}