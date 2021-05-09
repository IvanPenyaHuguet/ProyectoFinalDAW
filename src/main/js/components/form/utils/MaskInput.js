import React from 'react';

import MaskComponent from './MaskComponent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default function MaskInput ({label, name, mask, value, onChange, ...props}) {
        
    return (
        <FormControl>
            <InputLabel htmlFor={`'label'-${name}`} shrink>{label}</InputLabel>
            <Input
                value={value}
                onChange={onChange}
                name={name}
                id="formatted-text-mask-input"
                inputComponent={MaskComponent}
                inputProps={{ mask: mask}}
                mask={mask}                
            />
        </FormControl>
    )
}