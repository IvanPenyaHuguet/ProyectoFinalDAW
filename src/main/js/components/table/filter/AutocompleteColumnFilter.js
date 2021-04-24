import React, {  useState, useEffect} from'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import ContainerPopoverFilter from './ContainerPopoverFilter';



export default function SelectColumnFilter ({ filter, setFilter, labelname , store, width = 300 }) {    
    

    const [ autocomplete, setAutocomplete ] = useState(filter ? filter : '');
    const [ inputValue, setInputValue ] = useState('');

    const onAutoCompleteChange = ((e, newValue) => {
        setAutocomplete(newValue || undefined);
    });

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
    

    return (
        <ContainerPopoverFilter>            
            <Autocomplete
                id={`id-autocomplete-${labelname}`}
                options={store}
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
                renderInput={(params) => <TextField {...params} label={labelname} />}
                renderOption={renderOption}
            />
        </ContainerPopoverFilter>
           
    )
}