import React from 'react';

import Paper from '@material-ui/core/Paper';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({    
    tablecontainer: {
        display: 'flex',
        height: '100%'        
    }
}));

const columns = (t) => { return  [
    {
        field: 'name',
        headerName: t('table.user.name'),
        type: 'string'
    },
    {
        field: 'surname',
        headerName: t('table.user.surname'),
        type: 'string'
    },
    {
        field: 'username',
        headerName: t('table.user.username'),
        type: 'string'
    },
    {
        field: 'pass',
        headerName: t('table.user.pass'),
        type: 'string'
    },
    {
        field: 'creationDate',
        headerName: t('table.user.creationDate'),
        type: 'dateTime'
    },
]};

export default function UserTable () {

    const { t } = useTranslation(); 
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.tablecontainer}>
            <DataGrid 
                components={{
                    Toolbar: GridToolbar,
                }}
                columns={columns(t)}
            />
        </Paper>
    )
}