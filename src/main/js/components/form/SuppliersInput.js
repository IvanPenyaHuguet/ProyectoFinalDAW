import React, { useContext } from 'react';

import SelectInput from './utils/SelectInput';
import { SupplierStore } from '../../context/store/SuppliersStore';
import { useTranslation } from 'react-i18next';

export default function SuppliersInput (props) {

    const { t } = useTranslation(); 
    const store = useContext(SupplierStore);

    return (
        <SelectInput name="suppliers" label={t('form.label.supplier')} values={store} {...props} />
    )

}