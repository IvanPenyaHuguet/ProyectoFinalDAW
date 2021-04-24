import React, {  useState, useEffect} from'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import errorService from '../../../service/error/ErrorController';

import ContainerPopoverFilter from './ContainerPopoverFilter';
import { useTranslation } from 'react-i18next';


export default function SelectColumnFilter ({ filter, setFilter, labelname, width = 300, backend }) {    

    const { t } = useTranslation();
    const [ autocomplete, setAutocomplete ] = useState(null);
    const [ inputValue, setInputValue ] = useState(filter ? filter : '');
    const [ open, setOpen ] = useState(false);
    const [ options, setOptions ] = useState([]);
    const loading = open && options.length === 0;
    
    const onAutoCompleteChange = (e, newValue) => {
        setAutocomplete(newValue || undefined);
    };

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

    useEffect (() => {
        setFilter(autocomplete);
    },[autocomplete]);
    
    useEffect(() => {
      let active = true;
  
      if (!loading) {
        return undefined;
      }
  
      try {
        (async () => {
          const response = await backend.getAll();
          const objects = await response.data.filter(n => n);
          objects.unshift(t('all'));
          
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
        <ContainerPopoverFilter>            
            <Autocomplete
                id={`id-autocomplete-${labelname}`}
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
                style={{ width: width }}
                onInputChange={(event, newInputValue) => {
                 setInputValue(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} 
                  label={labelname}
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
        </ContainerPopoverFilter>
           
    )
}