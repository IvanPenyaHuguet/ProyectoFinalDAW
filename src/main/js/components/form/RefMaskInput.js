import React, { useContext, useEffect } from 'react';


import { RefMaskStore } from '../../context/store/RefMaskStore';
import { useTranslation } from 'react-i18next';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';



export default function RefMaskInput ({ value, setValue }) {

    const { t } = useTranslation(); 
    const store = useContext(RefMaskStore);

    const onSelectChange = (e) => {
        setValue(e.target.value);
    }
    useEffect (() => {
        if (store.length > 0)
            setValue(store[0].mask);
    }, [store])

    const menuItems = store.map( (item, ind) => {
        return <MenuItem key={ item.viewOrder ? item.viewOrder : ind } value={item.mask}>{item.description}</MenuItem>
    })

    return (        
        <FormControl>
            <InputLabel htmlFor={`'input-refmask'`}>{t('form.label.referencemask')}</InputLabel>
            <Select
                value={value}
                id={`'input-refmask'`}
                onChange={onSelectChange}                
            >
                { menuItems }
            </Select>
        </FormControl>
    )
}