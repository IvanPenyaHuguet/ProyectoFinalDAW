import React from 'react';

import ReagentModifyBase from './ReagentModifyBase';
import UtilizationInput from '../form/UtilizationInput';



export default function InorganicReagentModify ({ row, values, setAlert}) {
    return (
        <ReagentModifyBase 
            row={row}
            values={values}
            setAlert={setAlert}
        >
            <UtilizationInput /> 
        </ReagentModifyBase>
    )
}