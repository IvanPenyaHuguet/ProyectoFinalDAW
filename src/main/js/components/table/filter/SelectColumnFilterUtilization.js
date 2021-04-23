import React, { useContext, useState, useEffect, useMemo } from'react';

import SelectColumnFilter from './SelectColumnFilter';
import AutocompleteColumnFilter from './AutocompleteColumnFilter';

import { useTranslation } from 'react-i18next';
import { FilterUtilizationContext } from '../../../context/utils/FilterUtilizationContext';
import utilizationService from '../../../service/backend/UtilizationService';


export default function SelectColumnFilterLocation () {

    const { t } = useTranslation();
    const [ utilizations, setUtilizations ] = useState();
    const { filterUtilization, setFilterUtilization } = useContext(FilterUtilizationContext);

    useEffect( () => {
        utilizationService.getAll().then( res => {
            setUtilizations(res.data.filter(n => n));
        })             
    }, [])
    

    return (
        <AutocompleteColumnFilter setFilter={setFilterUtilization} filter={filterUtilization} labelname={t('table.column.Utilization')}  store={utilizations}/>
    )

}