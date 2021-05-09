import React from 'react';

import { KeyboardDatePicker } from '@material-ui/pickers';

export default function DatePicker ({label, selectedDate, handleDateChange, name, className, ...props }) {

    return (
        <KeyboardDatePicker          
          variant="inline"
          format="DD/MM/YYYY"
          margin="normal" 
          name= {name}         
          label={label}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          className={ className }
          {...props}
        />
    )
}