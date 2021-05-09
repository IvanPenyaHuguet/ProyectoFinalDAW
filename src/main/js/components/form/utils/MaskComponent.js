import React from 'react';

import MaskedInput from 'react-text-mask';


export default function MaskComponent ({ inputRef , mask, ...others }) {
    console.log(mask);
    const maskArray = mask != '' ? mask.split(",") : [];    
    const maskArray2 = maskArray ? maskArray.map( ele => {
        return ele[0] === 'c' ? ele[1] : new RegExp (ele);
    }) : []
    console.log(maskArray2)
    return (
        <MaskedInput    
            { ... others }        
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={ maskArray2 }
            placeholderChar={'\u005F'}
            showMask
        />
    )
}