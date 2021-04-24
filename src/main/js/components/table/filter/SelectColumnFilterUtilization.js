import React, { useContext } from'react';


import AutocompleteColumnFilterAsync from './AutocompleteColumnFilterAsync';

import { useTranslation } from 'react-i18next';
import { FilterUtilizationContext } from '../../../context/utils/FilterUtilizationContext';
import utilizationService from '../../../service/backend/UtilizationService';


export default function SelectColumnFilterLocation () {

    const { t } = useTranslation();

    const { filterUtilization, setFilterUtilization } = useContext(FilterUtilizationContext);      
   
    return (
        <AutocompleteColumnFilterAsync setFilter={setFilterUtilization} filter={filterUtilization} labelname={t('table.column.Utilization')} backend={utilizationService}/>
    )

}