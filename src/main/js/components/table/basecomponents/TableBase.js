import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
import MUITheme from '../../../lib/conf/GlobalMUIConf';
import MUITable from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';


import Loader from '../../container/Loader';
import TableHead from './TableHead';
import TablePagination from './TablePagination';
import Toolbar from './Toolbar';
import Container from '../../container/Container';


import { useSortBy, useTable, usePagination, useFilters, useAsyncDebounce } from 'react-table';
import { SearchTextContext } from '../../../context/SearchTextContext';
import { SearchElementsContext } from '../../../context/SearchElementsContext';
import ModifyRowTable from '../../popups/highlights/ModifyRowTable';
import { AuthContext } from '../../../context/AuthContextProvider';



export default function TableBase ({columns,  data, fetchData, loading, controlledPageCount, totalElements, title, filter }) {

    
    const { user } = useContext(AuthContext);
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, allColumns, getToggleHideAllColumnsProps, toggleHideAllColumns, 
        page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, setAllFilters, state 
    } = useTable({
        columns,
        data: data,
        initialState: { 
            pageIndex: 0,
            pageSize: 10,
            hiddenColumns: columns.map( col => {
                if (col.show === false) return col.accessor || col.id;
            })           
        },
        manualPagination: true,
        pageCount: controlledPageCount,
        autoResetPage: false,
        disableMultiSort: true,
        manualSortBy: true,
        defaultCanSort: false,
        manualFilter: true,
        autoResetFilters: false,        
    },   
    useFilters,    
    useSortBy,
    usePagination,
    );
    const [ showModify , setShowModify ] = useState(false);
    const { pageIndex, pageSize, sortBy, filters} = state;
    const [ textToSearch, setTextToSearch ] = useState('');
    const { elementsToSearch } = useContext(SearchElementsContext); 
     
       
    
    useEffect(() => {
        (onFetchDataDebounced( pageIndex, pageSize, textToSearch, elementsToSearch, sortBy, filter ));        
    }, [ onFetchDataDebounced, pageIndex, pageSize, textToSearch, elementsToSearch, sortBy, filter ]); 

    const onFetchDataDebounced = useAsyncDebounce(fetchData, 100);
    
    useEffect( () => {
        gotoPage(0);
    }, [pageSize, textToSearch ]);

    const onRowClick = (row) => {        
        if (user.role.includes("ROLE_EDIT_ALL")) {       
            setShowModify(row.original); 
        }              
    }

    
      
    return (
        <>        
            <SearchTextContext.Provider value={{ textToSearch, setTextToSearch }}>               
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
                        { loading
                        ? <tbody><tr><td colSpan={allColumns.length}><Loader /></td></tr></tbody>            
                        :  
                        <> 
                            <TableBody {...getTableBodyProps()}>
                                {page.map((row) => {
                                prepareRow(row)
                                return (
                                    <TableRow {...row.getRowProps()} onClick={() => onRowClick(row)} hover={true}>
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
                        </>
                        }          
                    </MUITable >                        
                </Container>
                { showModify != false && <ModifyRowTable row={ showModify } setOpen={ setShowModify }/> }          
            </SearchTextContext.Provider>         
        </>
    )
}