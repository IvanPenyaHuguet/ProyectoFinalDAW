import React, { useState, useEffect, useMemo, useContext } from 'react';
import MUITheme from './GlobalMUIConf';
import MUITable from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import Loader from '../container/Loader';
import TableHead from './TableHead';
import TablePagination from './TablePagination';
import Toolbar from './Toolbar';
import Container from '../container/Container';

import { makeStyles } from '@material-ui/core/styles';
import { useSortBy, useTable, usePagination } from 'react-table';
import { SearchTextContext } from '../../context/SearchTextContext';
import { SearchElementsContext } from '../../context/SearchElementsContext';

const useStyles = makeStyles((theme) => ({    
    tbody: {
      width: "100%",
      overflowY: "scroll",
      maxHeight: "calc(100% - 154px)",   
      height: "500px", 
    }
}));


export default function TableBase ({columns,  data, fetchData, loading, controlledPageCount, totalElements, title, searchFields}) {

    const classes = useStyles();
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, allColumns, getToggleHideAllColumnsProps, toggleHideAllColumns, 
        page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, state: { pageIndex, pageSize} 
    } = useTable({
        columns,
        data: data,
        initialState: { 
            pageIndex: 0,
            pageSize: 10,
            hiddenColumns: columns.map( col => {
                if (col.show === false) return col.accessor || col.id;
            }), 
        },
        manualPagination: true,
        pageCount: controlledPageCount,
        autoResetPage: false
    },
    useSortBy,
    usePagination
    );
    const [ textToSearch, setTextToSearch ] = useState('');
    const { elementsToSearch } = useContext(SearchElementsContext);
    
    
    useEffect(() => {                 
        fetchData( pageIndex, pageSize, textToSearch, elementsToSearch );                
    }, [ fetchData, pageIndex, pageSize, textToSearch, elementsToSearch]); 
    
    useEffect( () => {
        gotoPage(0);
    }, [pageSize, textToSearch])
      
    return (
        <>
        { loading
            ? <Loader />             
            :
            <SearchTextContext.Provider value={{textToSearch, setTextToSearch}}>
                <MUITheme>
                    <Container >            
                        <Toolbar 
                            allColumns={allColumns} 
                            getToggleHideAllColumnsProps={getToggleHideAllColumnsProps} 
                            toggleHideAllColumns={toggleHideAllColumns} 
                            title={title}
                        />          
                        <MUITable {...getTableProps()} stickyHeader >
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
                    </Container>            
                </ MUITheme> 
            </SearchTextContext.Provider>          
        }
        </>
    )
}