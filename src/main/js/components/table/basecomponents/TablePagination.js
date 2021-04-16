import React from 'react';

import TableFooter from '@material-ui/core/TableFooter';
import MUITablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TablePaginationActions from './TablePaginationActions';


export default function TablePagination ({ length, totalelements, pageindex , pagesize, setpagesize, gotopage}) {

        
    const handleChangeRowsPerPage = (event) => {      
      setpagesize(parseInt(event.target.value, 10));           
    };

    const handleChangePage = (event, newPage) => {       
      gotopage(newPage);
    };

    return (
        <TableFooter>
          <TableRow>
            <MUITablePagination
              rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
              colSpan={length}
              count={totalelements}
              rowsPerPage={pagesize}
              page={pageindex}
              SelectProps={{
                inputProps: { 'aria-label': 'Filas por página' },
                native: true,
              }}             
              onChangePage={handleChangePage}          
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>

    )
}