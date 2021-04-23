import React, { useContext, useMemo } from'react';

import SelectColumnFilter from './SelectColumnFilter';

import { useTranslation } from 'react-i18next';
import { LocationStore } from '../../../context/store/LocationStore';
import { FilterLocationContext } from '../../../context/utils/FilterLocationContext';

export default function SelectColumnFilterLocation () {

    const { t } = useTranslation();
    const locations  = useContext(LocationStore);
    const { filterLocation, setFilterLocation } = useContext(FilterLocationContext);

    const memoLocations = useMemo( () => {
        return locations
    }, [locations])

    return (
        <SelectColumnFilter setFilter={setFilterLocation} filter={filterLocation} labelname={t('table.column.location')}  store={memoLocations}/>
    )

}