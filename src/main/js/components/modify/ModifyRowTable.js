import React from 'react';

import GenericDialog from '../popups/highlights/GenericDialog';
import ReagentModify from './ReagentModify';

export default function ModifyRowTable({row , setOpen}) {    
     
    const open = row !== false;   

    return (
        <GenericDialog open={open} setOpen={setOpen} >            
            <ReagentModify row={row} setOpen={setOpen} />
        </GenericDialog>
    )
}



