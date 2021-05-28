import React from 'react';

import ReagentModifyBase from './ReagentModifyBase';
import FormInputText from '../form/MUIFormInputText';

import { useTranslation } from 'react-i18next';


export default function InorganicReagentModify ({ row, values, setAlert}) {

    const { t } = useTranslation();

    return (
        <ReagentModifyBase 
            row={row}
            values={values}
            setAlert={setAlert}
        >
            <FormInputText 
                label={t('form.add.secintref')}
                name="secondaryIntReference"   
            />  
        </ReagentModifyBase>
    )
}