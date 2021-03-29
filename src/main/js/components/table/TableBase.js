import React, { useState, useEffect, useMemo } from 'react';
import MUITheme from './GlobalMUIConf';
import MUITable from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import Loader from '../container/Loader';
import TableHead from './TableHead';
import TablePagination from './TablePagination';


import { useSortBy, useTable, usePagination } from 'react-table';



export default function TableBase ({columns,  data, fetchData, loading, controlledPageCount, totalElements}) {

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, 
        page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, state: { pageIndex, pageSize} 
    } = useTable({
        columns,
        data: data,
        initialState: { 
            pageIndex: 0 
        },
        manualPagination: true,
        pageCount: controlledPageCount,
        autoResetPage: false
    },
    useSortBy,
    usePagination
    );
    
    useEffect(() => {                 
        fetchData( pageIndex, pageSize  );
    }, [ fetchData, pageIndex, pageSize]);  
      
    return (
        <>
        { loading
            ? <Loader /> 
            : <MUITheme>           
                <MUITable {...getTableProps()}>
                    <TableHead headerGroups={headerGroups}>                   
                    </TableHead>             
                    <TableBody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                <TableCell {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </TableCell>
                                )
                            })}
                            </TableRow>
                        )
                        })}
                    </TableBody> 
                    <TablePagination 
                        totalelements={totalElements} 
                        length={columns.length}
                        pageindex={pageIndex} 
                        pagesize={pageSize} 
                        setpagesize={setPageSize} 
                        gotopage={gotoPage}                               
                    />          
                </MUITable >            
            </ MUITheme>
        }
        </>
    )
}