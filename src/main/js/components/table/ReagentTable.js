import React, { useMemo, useState, useCallback, useRef } from 'react';
import BackendService from '../../service/backend/AllReagentService';
import TableBase from './basecomponents/TableBase';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import { useTranslation } from 'react-i18next';
import { SearchFieldContext } from '../../context/SearchFieldContext';
import { SearchElementsContext } from '../../context/SearchElementsContext';
import SearchService from '../../service/backend/SearchService';
import errorService from '../../service/error/ErrorController';

const ReagentTable = () => {
   
    const { t } = useTranslation();
    const TITLE = t('table.title.reagents');
    const [ data , setData ] = useState([]);   
    const [ loading, setLoading ] = useState(false); 
    const [ controlledPageCount, setControlledPageCount ] = useState(0);
    const [ totalElements, setTotalElements ] = useState (0);
    const fetchIdRef = useRef(0);
   
    

    const columns = useMemo (() => [
        {
            Header: t('table.column.id'),
            accessor: "id",
            show: false,
            disableSortBy: false
        },{
            Header: t('table.column.reference'),
            accessor: "internalReference",
            disableSortBy: false
        },{
            Header: t('table.column.spanishName'),
            accessor: "spanishName",
            disableSortBy: false
        },{
            Header: t('table.column.englishName'),
            accessor: "englishName",
            show: false,
            disableSortBy: false
        },{
            Header: t('table.column.elements'),
            accesor: "elements",
            id: "elements",
            show: true,
            Cell: row => {
                const elements = row.row.original.elements;  
                let counts = {};
                elements.forEach(function(element) { 
                    counts[element.atomicNumber] = {
                        total: counts[element.atomicNumber] ?  counts[element.atomicNumber].total + 1 : 1,
                        element: element
                    }; 
                });                
                return (
                    <div>
                        {Object.keys(counts).map((item, i) => ( 
                            <Chip  avatar={<Avatar>{counts[item].element.element}</Avatar>} label={counts[item].total} variant="outlined" key={i}/>
                        ))}                      
                    </div>
                )
            },
            disableSortBy: true
        },{
            Header: t('table.column.formula'),
            accesor: "formula",
            id: "formula",
            show: false,
            disableSortBy: false
        },{
            Header: t('table.column.type'),
            accessor: "reagentType",
            disableSortBy: false
        },{
            Header: t('table.column.quantity'),
            accessor: "quantity",
            disableSortBy: false
        },{
            Header: t('table.column.location'),
            accessor: "location.name",
            disableSortBy: false
        },{
            Header: t('table.column.utilization'),
            accessor: "utilization",
            disableSortBy: true
        },{
            Header: t('table.column.cas'),
            accessor: "cas",
            show: false,
            disableSortBy: false
        },{
            Header: t('table.column.receptionDate'),
            accessor: "entryDate",
            show: false,
            disableSortBy: false
        },{
            Header: t('table.column.boughtBy'),
            accessor: "user.name",
            show: false,
            disableSortBy: true
        },{
            Header: t('table.column.molecularWeight'),
            accessor: "molecularWeight",
            show: false,
            disableSortBy: false
        },{
            Header: t('table.column.supplier'),
            accesor: "suppliers",
            id: "suppliers",
            show: false,
            Cell: row => {
                const suppliers = row.row.original.suppliers;             
                return (
                    <>
                        {Object.keys(suppliers).map((item, i) => (
                            <div key={suppliers[item].supplier.id}>
                                <span className="">
                                {suppliers[item].supplier.name} 
                                </span> 
                                <Divider orientation="vertical" flexItem /> 
                            </div>                          
                        ))}
                    </>
                )
            },
            disableSortBy: true
        }
    ], []);

    const searchFields = [
    {
        value: "spanishName",
        name: t('table.column.spanishName'),
        selected: true
    },{
        value: "englishName",
        name: t('table.column.englishName'),
        selected: true
    },{
        value: "cas",
        name: t('table.column.cas'),
        selected: false
    },{
        value: "internalReference",
        name: t('table.column.reference'),
        selected: true
    },{
        value: "utilization",
        name: t('table.column.utilization'),
        selected: false
    },{
        value: "elements.englishName",
        name: t('table.column.elements.englishName'),
        selected: false
    },{
        value: "secondaryIntReference",
        name: t('table.column.secondaryintreference'),
        selected: true
    }];
    
    const [ fieldsToSearch, setFieldsToSearch ] = useState(searchFields);
    const [ elementsToSearch, setElementsToSearch ] = useState({});

    const fetchData = useCallback((pageindex, pagesize, textToSearch, elementsToSearch, sortBy) => {
        const fetchId = ++fetchIdRef.current;
               
        if (fetchId === fetchIdRef.current) {
            setLoading(true);
            if (textToSearch === '' && (!elementsToSearch || Object.keys(elementsToSearch).length === 0)) {                
                BackendService.getPage( pageindex, pagesize, sortBy )
                .then (result => {                
                    setLoading(false);       
                    setControlledPageCount(result.data.numPages);  
                    setTotalElements(result.data.totalElements);  
                    setData(result.data.data);    
                })
                .catch (e => {
                    errorService.checkError(e);
                });
            }
            else if(!elementsToSearch || Object.keys(elementsToSearch).length === 0) {                
                SearchService.searchReagentPage(pageindex, pagesize, textToSearch, fieldsToSearch.filter( ({selected}) => selected===true).map(({value}) =>  value ))
                    .then ( result => {                        
                        setLoading(false);
                        setControlledPageCount(result.data.numPages + 1);
                        setTotalElements(result.data.totalElements);  
                        setData(result.data.data);                                                      
                    })
                    .catch( err => errorService.checkError(err));
            }
            else {
                SearchService.searchReagentByElements(pageindex, pagesize, elementsToSearch)
                    .then ( result => {
                        console.log("here")
                        setLoading(false);       
                        setControlledPageCount(result.data.numPages);  
                        setTotalElements(result.data.totalElements);  
                        setData(result.data.data);
                    })
                    .catch( err => errorService.checkError(err));
            }
        }     
    },[]);
    
   
    

    return (
        <>     
        <SearchFieldContext.Provider value={{fieldsToSearch, setFieldsToSearch}}>  
            <SearchElementsContext.Provider value={{elementsToSearch, setElementsToSearch}}>
                <TableBase 
                    columns={columns} 
                    backendService={BackendService} 
                    loading={loading} 
                    data={data} 
                    controlledPageCount={controlledPageCount} 
                    totalElements={totalElements}
                    title={TITLE}
                    fetchData={fetchData}
                    searchFields={searchFields}
                />   
            </SearchElementsContext.Provider>
        </SearchFieldContext.Provider>
        </>
    )

}
export default ReagentTable;