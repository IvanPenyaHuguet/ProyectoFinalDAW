import React, { useState , useEffect, useContext } from 'react';

import BoxContainer from '../../container/BoxContainer';
import PeriodicTable from '../../periodictable/PeriodicTable';
import { useFormikContext, Field } from 'formik';
import { ElementStore } from '../../../context/store/ElementStore';


export default function ElementsInput ({values, ...props}) {

    const [ selectedElements, setSelectedElements ] = useState ({});
    const perTable = useContext(ElementStore);
    const { setFieldValue } = useFormikContext();
    
    
    useEffect( () => {
        values.elements = selectedElements;         
        values.formula != undefined ? values.formula = getStringElements() : null;        
        values.molecularWeight != undefined ? setFieldValue('molecularWeight',getMolecularWeight()) : null;
    }, [ selectedElements ])

    const getStringElements = () => { 
        let string = '';
        for (let [key, value] of Object.entries(selectedElements)) { 
            string += value > 0 ? perTable[key-1].element : '';  
            string += value > 1 ?  value : '';      
        }
        return string       
    } 
    const getMolecularWeight = () => {
        let totalWeight = 0;
        for (let [key, value] of Object.entries(selectedElements)) { 
            for (let i=0; i < value; i++)               
                totalWeight += perTable[key-1].mass;        
        }       
        return totalWeight.toFixed(2);
    }
    

    return (
        <BoxContainer {...props}>
            <Field name='elements' label='elements' component={PeriodicTable} selectedElements={selectedElements} setSelectedElements={setSelectedElements} />                       
        </BoxContainer>
    )
}