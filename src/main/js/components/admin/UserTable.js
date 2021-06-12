import React, { useState, useRef, useEffect, useCallback } from 'react';

import Paper from '@material-ui/core/Paper';
import { DataGrid, GridToolbar, GridOverlay } from '@material-ui/data-grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import User from '../../lib/entities/User';
import errorService from '../../service/error/ErrorController';

import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({    
    tablecontainer: {
        margin: '20px 0',
        display: 'flex',
        height: '100%'        
    },
    root: {
        '& .MuiDataGrid-cellEditing': {
          backgroundColor: 'rgb(255,215,115, 0.19)',
          color: '#1a3e72',
        },
        '& .Mui-error': {
          backgroundColor: `rgb(126,10,15, 0.2)`,
          color: '#750f0f',
          fontStyle: 'italic'
        },
    }
}));

const columns = (t) => { return  [
    {
        field: 'name',
        headerName: t('table.user.name'),
        type: 'string',
        flex: 1,
        editable: true
    },
    {
        field: 'surname',
        headerName: t('table.user.surname'),
        type: 'string',
        flex: 1,
        editable: true
    },
    {
        field: 'username',
        headerName: t('table.user.username'),
        type: 'string',
        flex: 1,
        editable: true
    },
    {
        field: 'pass',
        headerName: t('table.user.pass'),
        type: 'string',
        flex: 1,
        editable: true
    },
    {
        field: 'creationDate',
        headerName: t('table.user.creationDate'),
        type: 'dateTime',
        flex: 0.7,
        editable: false
    },
]};

function validateText(text) {
    const re =
      /^[a-zA-Z ]{3,50}/;
    return re.test(String(text).toLowerCase());
}

const getData = (setLoading, setData, setTotalElements, fetchIdRef) => {
    const user = new User();
    const fetchId = ++fetchIdRef.current;

    if (fetchId === fetchIdRef.current) {            
        setLoading(true);
        user.getAll()
            .then(result => {
                setLoading(false); 
                setData(result.data.data);
                setTotalElements(result.data.totalElements); 
            })
            .catch(err => {
                errorService.checkError(err);
            })
    }
}; 

export default function UserTable ({reload}) {

    const { t } = useTranslation(); 
    const classes = useStyles();
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ totalElements, setTotalElements ] = useState(0);    
    const fetchIdRef = useRef(0);
    const [editRowsModel, setEditRowsModel] = useState({});    

    useEffect(() => {
        getData(setLoading, setData, setTotalElements, fetchIdRef);
    },[reload]);
    
    const handleEditCellChange = useCallback(
        ({ id, field, props }) => {
            const values = props;
            if (field === 'name') {                
                const isValid = validateText(values.value);            
                const newState = {};            
                newState[id] = {
                ...editRowsModel[id],
                name: { ...props, error: !isValid },
                };    
                setEditRowsModel((state) => ({ ...state, ...newState })); 
            }          
            else if (field === 'surname') {                
                const isValid = validateText(values.value);            
                const newState = {};            
                newState[id] = {
                ...editRowsModel[id],
                surname: { ...props, error: !isValid },
                };    
                setEditRowsModel((state) => ({ ...state, ...newState }));
            }
            else if (field === 'pass') {                
                const isValid = validateText(values.value);            
                const newState = {};            
                newState[id] = {
                ...editRowsModel[id],
                pass: { ...props, error: !isValid },
                };    
                setEditRowsModel((state) => ({ ...state, ...newState }));
            }
            else if (field === 'username') {                 
                const isValid = validateText(values.value);            
                const newState = {};            
                newState[id] = {
                ...editRowsModel[id],
                username: { ...props, error: !isValid },
                };    
                setEditRowsModel((state) => ({ ...state, ...newState }));
            }
            
        },
        [editRowsModel],
      );

    const handleEditCellChangeCommitted = useCallback(        
        ({ id, field, props }) => {
            const user = new User();
            const values = props;            
            const rowToSave = data.filter(row => {               
                if (row.id === id) {
                    row[field] = values.value;
                    return { ...row };
                }
            }); 
            user.save(rowToSave[0], setLoading)
                .then(res => {
                    console.log(res)
                    const updatedRows = data.map((row) => {
                        if (row.id === id) {
                            return res.data;
                        }
                        return row;
                    });
                    setData(updatedRows);
                })
                .catch(err => {
                    errorService.checkError(err);
                })         
        },
        [data],
    );


    

    return (
        <Paper elevation={3} className={classes.tablecontainer}>
            <DataGrid
                className={classes.root}
                components={{
                    Toolbar: GridToolbar,
                    LoadingOverlay: CustomLoadingOverlay,
                }}
                columns={columns(t)}
                rows={data}
                loading={loading}                
                hideFooter
                autoHeight
                editRowsModel={editRowsModel}                
                onEditCellChange={handleEditCellChange}
                onEditCellChangeCommitted={handleEditCellChangeCommitted}               
            />
        </Paper>
    )
}

function CustomLoadingOverlay() {
    return (
      <GridOverlay>
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <LinearProgress />
        </div>
      </GridOverlay>
    );
}