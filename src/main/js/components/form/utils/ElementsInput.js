import React, { useState , useEffect } from 'react';

import BoxContainer from '../../container/BoxContainer';
import PeriodicTable from '../../periodictable/PeriodicTable';
import { Field } from 'formik';


export default function ElementsInput ({values, ...props}) {

    const [ selectedElements, setSelectedElements ] = useState ({});
    
    useEffect( () => {
        values.elements = selectedElements;         
        values.formula ? values.formula = getStringElements() : null;      
    }, [ selectedElements ])

    const getStringElements = () => { 
        return ''       
    } 

    return (
        <BoxContainer {...props}>
            <Field name='elements' label='elements' component={PeriodicTable} selectedElements={selectedElements} setSelectedElements={setSelectedElements} />                       
        </BoxContainer>
    )
}