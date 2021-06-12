import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';

import Paper from '@material-ui/core/Paper';
import { DataGrid, GridToolbar, GridOverlay } from '@material-ui/data-grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import Location from '../../../lib/entities/Location';
import errorService from '../../../service/error/ErrorController';
import CustomFooterDelete from './CustomFooterDelete';
import {GRID_EN_LOCALE_TEXT , GRID_ES_LOCALE_TEXT} from '../../../lib/conf/DataGridLocale';

import { LocalizationContext } from '../../../context/LocalizationContext';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({    
    tablecontainer: {
        margin: '20px 0',
        display: 'flex',
        height: '100%',        
    },
    root: {
        height: '100%',
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
        field: 'id',
        headerName:  t('admin.locations.table.id'),
        type: 'number',
        flex: 0.7,
        editable: false
    },
    {
        field: 'name',
        headerName:  t('admin.locations.table.name'),
        type: 'string',
        flex: 1,
        editable: true
    },
    {
        field: 'viewOrder',
        headerName: t('admin.locations.table.vieworder'),
        type: 'number',
        flex: 0.7,
        editable: true
    }    
]};

function validateText(text) {
    const re =
      /^[a-zA-Z ]{3,50}/;
    return re.test(String(text).toLowerCase());
}
function validateNumber(text) {
    const re =
      /^[0-9]{1,3}/;
    return re.test(String(text).toLowerCase());
}

const getData = (setLoading, setData, fetchIdRef) => {
    const location = new Location();
    const fetchId = ++fetchIdRef.current;

    if (fetchId === fetchIdRef.current) {            
        setLoading(true);
        location.getAll()
            .then(result => {
                setLoading(false);
                const data = result.data;
                data.push({
                    id: 0,
                    name: 'Add a new location here',
                    viewOrder: data.length + 1
                })
                setData(data);                
            })
            .catch(err => {
                errorService.checkError(err);
            })
    }
}; 


export default function Locations () {    

    const { t } = useTranslation(); 
    const classes = useStyles();
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);       
    const fetchIdRef = useRef(0);
    const [editRowsModel, setEditRowsModel] = useState({}); 
    const [ selectionModel, setSelectionModel ] = useState([]); 
    const [ reload, setReload ] = useState(0);  
    const { language } = useContext(LocalizationContext);


    useEffect(() => {
        getData(setLoading, setData, fetchIdRef);
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
            else if (field === 'viewOrder') {                
                const isValid = validateNumber(values.value);            
                const newState = {};            
                newState[id] = {
                ...editRowsModel[id],
                viewOrder: { ...props, error: !isValid },
                };    
                setEditRowsModel((state) => ({ ...state, ...newState }));
            }                       
        },
        [editRowsModel],
      );

    const handleEditCellChangeCommitted = useCallback(        
        ({ id, field, props }) => {
            const location = new Location();
            const values = props;            
            const rowToSave = data.filter(row => {               
                if (row.id === id) {
                    row[field] = values.value;
                    return { ...row };
                }
            }); 
            location.save(rowToSave[0], setLoading)
                .then(res => {                    
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

    const onSelectionChange = (newSelection) => {
        setSelectionModel(newSelection.selectionModel);
    }

    

    return (
        <Paper elevation={3} className={classes.tablecontainer}>
            <DataGrid
                className={classes.root}
                components={{
                    Toolbar: GridToolbar,
                    LoadingOverlay: CustomLoadingOverlay,
                    Pagination: CustomFooterDelete,
                }}
                componentsProps={{
                    pagination: { setReload, selectionModel, loading },
                }}
                columns={columns(t)}
                rows={data}
                loading={loading}              
                editRowsModel={editRowsModel}                
                onEditCellChange={handleEditCellChange}
                onEditCellChangeCommitted={handleEditCellChangeCommitted} 
                disableMultipleSelection={true} 
                onSelectionModelChange={(newSelection) => onSelectionChange(newSelection)}   
                selectionModel={selectionModel}   
                isRowSelectable={(params) => params.row.id != 0}  
                localeText={language == 'en' ? GRID_EN_LOCALE_TEXT : GRID_ES_LOCALE_TEXT}
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
