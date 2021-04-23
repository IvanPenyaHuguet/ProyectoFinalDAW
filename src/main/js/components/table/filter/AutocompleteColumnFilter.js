import React, {  useState, useEffect} from'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import ContainerPopoverFilter from './ContainerPopoverFilter';
import { useTranslation } from 'react-i18next';


export default function SelectColumnFilter ({ filter, setFilter, labelname , store, width = 300 }) {    
    
    const { t } = useTranslation();
    const [ autocomplete, setAutocomplete ] = useState();
    const [ inputValue, setInputValue ] = useState('');

    const onSelectChange = (e) => {      
        setFilter(e.target.value || undefined);
    }

    const onAutoCompleteChange = ((e, newValue) => {
        setAutocomplete(newValue || undefined);
    });

    const renderOption =  (option, { inputValue }) => {
        const matches = match(option, inputValue);
        const parts = parse(option, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}
          </div>
        );
    }

    useEffect (() => {
        setFilter(autocomplete);
    },[autocomplete]);
    console.log(store);

    return (
        <ContainerPopoverFilter>            
            <Autocomplete
                id={`id-autocomplete-${labelname}`}
                options={store}
                getOptionLabel={(option) => option}
                autoHighlight
                clearOnEscape
                autoComplete
                value={autocomplete}
                onChange={onAutoCompleteChange}
                inputValue={inputValue}
                style={{ width: width }}
                onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                }}
                renderInput={(params) => <TextField {...params} label={labelname} />}
                renderOption={renderOption}
            />
        </ContainerPopoverFilter>
           
    )
}