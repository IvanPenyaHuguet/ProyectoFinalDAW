import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import { useTranslation } from 'react-i18next';


export default function TypeAddSelect ({ typeSelectValue, setTypeSelectValue, className }) {

    const { t } = useTranslation();


    const typesToAdd = [
        { 
            value: 'InorganicReagent',
            name: t('lars.types.inorganicreagent')
        },{
            value: 'OrganicReagent',
            name: t('lars.types.organicreagent')
        },{
            value: 'AquStdSol',
            name: t('lars.types.aqustdsol')
        },{
            value: 'OrgStdSol',
            name: t('lars.types.orgstdsol')
        }
    ];
    const menuItems = typesToAdd.map( (type, index) => {
        return <MenuItem key={index }value={type.value}>{type.name}</MenuItem>
    });

    const handleChange = (e) => {
        setTypeSelectValue(e.target.value);
    }

    return (
        <FormControl variant="filled" className={className}>
            <InputLabel id="labelSelectTypeToAdd">{t('form.add.typetoadd')}</InputLabel>
            <Select
                labelId="labelSelectTypeToAdd"
                id="selectTypeToAdd"
                value={typeSelectValue}
                onChange={handleChange}
                >
                { menuItems }
            </Select>
        </FormControl>
    )
}