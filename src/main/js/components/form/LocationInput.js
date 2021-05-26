import React, { useContext } from 'react';

import SelectInput from './utils/SelectInput';
import { LocationStore } from '../../context/store/LocationStore';
import { useTranslation } from 'react-i18next';

export default function LocationInput (props) {

    const { t } = useTranslation(); 
    const store = useContext(LocationStore);    

    return (
        <SelectInput name="location" label={t('form.label.location')} store={store} {...props} />
    )
}