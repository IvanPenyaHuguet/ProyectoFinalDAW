import React, { useContext, useState, useMemo } from'react';

import SelectColumnFilter from './SelectColumnFilter';

import { useTranslation } from 'react-i18next';
import { LocationStore } from '../../../context/store/LocationStore';
import { FilterContext } from '../../../context/utils/FilterContext';

export default function SelectColumnFilterLocation () {

    const { t } = useTranslation();
    const locations  = useContext(LocationStore);
    const { filterLocation, setFilterLocation } = useContext(FilterContext);

    const memoLocations = useMemo( () => {
        return locations
    }, [locations])

    return (
        <SelectColumnFilter setFilter={setFilterLocation} filter={filterLocation} labelname={t('table.column.location')}  store={memoLocations}/>
    )

}