import React from 'react';

import MaskInput from './utils/MaskInput';
import { useTranslation } from 'react-i18next';
import { Field } from 'formik';


export default function IntRefInput ({mask, ...props}) {
    
    const { t } = useTranslation();    

    return (
        <Field
            component={MaskInput}
            name="internalReference"
            label={t('form.add.internalreference')}            
            mask={mask}            
            { ...props }
        >
        </Field>          
    )
}