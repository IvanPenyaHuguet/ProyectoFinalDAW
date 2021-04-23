import React, {  useState, useEffect} from'react';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import ContainerPopoverFilter from './ContainerPopoverFilter';
import { useTranslation } from 'react-i18next';


export default function SelectColumnFilter ({ filter, setFilter, labelname , store }) {    
    
    const { t } = useTranslation();
    const [items, setItems] = useState([])

    const onSelectChange = (e) => {      
        setFilter(e.target.value || undefined);
    }
   
    useEffect( () => {
        if (store) {
            setItems(store.map( (col, index ) => {
                if (col){
                    if (col.id){
                        return (        
                            <MenuItem key={col.id} value={col.id}>{col.name}</MenuItem>
                        )
                    }
                    else {
                        return (        
                            <MenuItem key={index} value={col}>{col}</MenuItem>
                        )
                    }
                }
            }));            
        }       
    }, [store])
             

    return (
        <ContainerPopoverFilter>
            <InputLabel id={`label${labelname}`}>{labelname}</InputLabel>
            <Select    
            labelId={`label${labelname}`}
            id={`select${labelname}`}                           
            value={filter}
            onChange={onSelectChange}
            >         
                <MenuItem value="0">{t("all")}</MenuItem>                           
                { items } 
            </Select>
        </ContainerPopoverFilter>
           
    )
}