import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import Alert from '../../popups/Alert';

import UserService from '../../../service/backend/Services/UserService';
import ErrorController from '../../../service/error/ErrorController';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({    
    formadd: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '10px 15px 20px'        
    },
    buttonContainer: {
        margin: '0 20px', 
        alignSelf: 'center'       
    }
}));

const renderOption =  (option, { inputValue }) => {
    const matches = match(option, inputValue);
    const parts = parse(option, matches);

    return (
      <div>
        {parts.map((part, index) => (
          <span key={index} style={{ fontWeight: part.highlight ? 700 : 400}}>
            {part.text}
          </span>
        ))}
      </div>
    );
}



export default function AdminUser ({ user, setUser }) {
    
    const classes = useStyles();
    const { t } = useTranslation();

    const [ alert, setAlert ] = useState(false);
    const [ selected, setSelected ] = useState(false);
    const [ options, setOptions ] = useState([]);
    const [ open, setOpen ] = useState(false);
    const [ autocomplete, setAutocomplete ] = useState(null);
    const [ inputValue, setInputValue ] = useState(user ? user : '');
    const loading = open && options.length === 0;


    const onDeleteClick = () => {
        setSelected(false);
        UserService.delete(user)
            .then( res => {
                if (res.status == 200) {
                    setAlert({type: 'success', message: t('admin.funciones.selectuser.deletesuccess')})
                }
                else {
                    setAlert({type: 'error', message: t('admin.funciones.selectuser.deleteerror')})
                } 
                setUser(undefined);
                setInputValue('');               
            })
            .catch( err => {
                ErrorController.checkError(err, setAlert);
                setSelected(true);
            })
    }   
    
    const onAutoCompleteChange = (e, newValue) => {
        setAutocomplete(newValue || undefined);
    };

    const onInputChange = (event, newInputValue) => {
        setInputValue(newInputValue);
    };

    useEffect(() => {
        setSelected(false);              
        if (autocomplete != null) {            
            UserService.getById({id: autocomplete?.split(":")[0]})
                .then( res => {
                    if (res.status != 200) {
                        setAlert({type: 'error', message: t('admin.funciones.selectuser.deleteerror')})
                    }
                    else {                        
                        setUser(res.data);
                        setSelected(true);
                    }                               
                })
                .catch( err => {
                    ErrorController.checkError(err, setAlert);
                    setSelected(true);
                })
        }
    },[autocomplete]);    

    useEffect(() => {
        let active = true;    
        if (!loading) {
          return undefined;
        }    
        try {
            (async () => {
                const response = await UserService.getAll();                
                const objects = await response.data.data.map(n => (
                    n.id + ": " + n.name + " " + n.surname + " --- "+ n.username
                ));         
                if (active) {
                    setOptions(objects);
                }
            })();
        }
        catch (e) {
          errorService.checkError(e);
        }       
        return () => {
          active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
          setOptions([]);
        }
    }, [open]);


    return (
        <Paper className={classes.formadd} elevation={3}> 
            { alert && <Alert open={alert ? true : false} setOpen={setAlert} type={alert.type}>{alert.message}</Alert> }               
            <Autocomplete
                id={`id-autocomplete-users`}
                options={options}
                getOptionLabel={(option) => option}
                autoHighlight
                clearOnEscape
                autoComplete
                openOnFocus
                blurOnSelect
                value={autocomplete}
                onChange={onAutoCompleteChange}
                inputValue={inputValue}
                style={{ width: '300px' }}
                onInputChange={onInputChange}
                renderInput={(params) => (
                  <TextField {...params} 
                  label={t('admin.funciones.selectuser.user')}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment:(
                      <>
                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    )
                  }}
                />)}
                getOptionSelected={(option, value) => option === value}
                renderOption={renderOption}
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                loading={loading}
            />            
            <Button
                variant="contained"
                color="primary"
                disabled={!selected}
                onClick={onDeleteClick}
                endIcon={<DeleteIcon />}
                className={classes.buttonContainer}
            >
                {t('general.delete')}
            </Button>
        </Paper>
    )
}