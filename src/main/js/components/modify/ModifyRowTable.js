import React from 'react';

import GenericBackdrop from '../popups/highlights/GenericBackdrop';
import ReagentModify from './ReagentModify';

export default function ModifyRowTable({row , setOpen}) {    
     
    const open = row !== false;   

    return (
        <GenericBackdrop open={open} setOpen={setOpen} >            
            <ReagentModify row={row} setOpen={setOpen} />
        </GenericBackdrop>
    )
}



