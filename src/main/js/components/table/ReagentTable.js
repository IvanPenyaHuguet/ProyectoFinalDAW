import React, { useMemo, useState, useCallback, useRef, useEffect, useContext } from 'react';
import BackendService from '../../service/backend/AllReagentService';
import TableBase from './basecomponents/TableBase';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';

import { useTranslation } from 'react-i18next';
import { SearchFieldContext } from '../../context/SearchFieldContext';
import { SearchElementsContext } from '../../context/SearchElementsContext';
import SearchService from '../../service/backend/SearchService';
import errorService from '../../service/error/ErrorController';
import SelectColumnFilterLocation from './filter/SelectColumnFilterLocation';
import SelectColumnFilterUtilization from './filter/SelectColumnFilterUtilization';
import { FilterLocationContext } from '../../context/utils/FilterLocationContext';
import { FilterUtilizationContext } from '../../context/utils/FilterUtilizationContext';
import { SpeedDialContext } from '../../context/utils/SpeedDialContext';
import { AuthContext } from '../../context/AuthContextProvider';
import reagendPdf from '../../lib/pdf/ReagentPdf';

const ReagentTable = () => {
   
    const { t } = useTranslation();
    const TITLE = t('table.title.reagents');
    const { user, setUSer } = useContext(AuthContext);
    const [ data , setData ] = useState([]);     
    const [ loading, setLoading ] = useState(false); 
    const [ controlledPageCount, setControlledPageCount ] = useState(0);
    const [ totalElements, setTotalElements ] = useState (0);
    const fetchIdRef = useRef(0);
    const [ filterLocation, setFilterLocation ] = useState('');
    const [ filterUtilization, setFilterUtilization ] = useState('');
    const [ filter, setFilter ] = useState(null);

    useEffect(() => {
        if (filterLocation != undefined && filterLocation != ''){
            setFilter({ location: filterLocation });            
        }
        else if (filterUtilization != undefined && filterUtilization != '') {
            setFilter({utilization: filterUtilization});            
        }
        else {            
            setFilter(null);
        }        
    }, [filterLocation, filterUtilization])
   
    

    const columns = useMemo (() => [
        {
            Header: t('table.column.id'),
            accessor: "id",
            show: false,
            disableSortBy: false,
            disableFilters: true 
        },{
            Header: t('table.column.reference'),
            accessor: "internalReference",
            disableSortBy: false,
            disableFilters: true
        },{
            Header: t('table.column.spanishName'),
            accessor: "spanishName",
            disableSortBy: false,
            disableFilters: true
        },{
            Header: t('table.column.englishName'),
            accessor: "englishName",
            show: false,
            disableSortBy: false,
            disableFilters: true
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
            disableSortBy: true,
            disableFilters: true
        },{
            Header: t('table.column.formula'),
            accesor: "formula",
            id: "formula",
            show: false,
            disableSortBy: false,
            disableFilters: true
        },{
            Header: t('table.column.type'),
            accessor: "reagentType",
            disableSortBy: false,
            disableFilters: true
        },{
            Header: t('table.column.quantity'),
            accessor: "quantity",
            disableSortBy: false,
            disableFilters: true
        },{
            Header: t('table.column.location'),
            accessor: "location.name",
            disableSortBy: false,
            disableFilters: false,
            Filter: SelectColumnFilterLocation,            
        },{
            Header: t('table.column.utilization'),
            accessor: "utilization",
            disableSortBy: true,
            disableFilters: false,
            Filter: SelectColumnFilterUtilization,
        },{
            Header: t('table.column.cas'),
            accessor: "cas",
            show: false,
            disableSortBy: false,
            disableFilters: true
        },{
            Header: t('table.column.receptionDate'),
            accessor: "entryDate",
            show: false,
            disableSortBy: false,
            disableFilters: true
        },{
            Header: t('table.column.boughtBy'),
            accessor: "user.name",
            show: false,
            disableSortBy: true,
            disableFilters: true
        },{
            Header: t('table.column.molecularWeight'),
            accessor: "molecularWeight",
            show: false,
            disableSortBy: false,
            disableFilters: true
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
            disableSortBy: true,
            disableFilters: true
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
        name: t('table.column.elements'),
        selected: false
    },{
        value: "secondaryIntReference",
        name: t('table.column.secondaryintreference'),
        selected: true
    }];

    const speedDial = useMemo ( () => {
        const actions = [        ,
            { icon: <SaveIcon />, name: t('table.tooltip.save'), click: reagendPdf.generatePdf},
            { icon: <PrintIcon />, name: t('table.tooltip.print'), click: reagendPdf.generatePdf },
        ];    
        if (user.role.includes("ROLE_ADD_ALL")) {       
            actions.unshift({ icon: <AddIcon /> , name: t('table.tooltip.add'), click: reagendPdf.generatePdf });
        }
        return actions;
    },[])
    
    const [ fieldsToSearch, setFieldsToSearch ] = useState(searchFields);
    const [ elementsToSearch, setElementsToSearch ] = useState({});

    const fetchData = useCallback((pageindex, pagesize, textToSearch, elementsToSearch, sortBy, filter) => {
        const fetchId = ++fetchIdRef.current;
        const filterLocationChanged = filter ? filter.location  !== '' && filter.location !== '0' && filter.location != null : false;
        const filterUtilizationChanged = filter ? filter.utilization  !== '' && filter.utilization !== '0' && filter.utilization != null && filter.utilization !== 'All' : false;
        const elementsChanged = elementsToSearch && Object.keys(elementsToSearch).length > 0;
        const textChanged = textToSearch !== '';
        

        if (fetchId === fetchIdRef.current) {
            
            setLoading(true);
            if ( elementsChanged) {
                (SearchService.searchReagentByElements(pageindex, pagesize, elementsToSearch)
                    .then (res => processResult(res))
                    .catch( err => errorService.checkError(err)));
                console.log("elements")
            }
            else if (filterLocationChanged){                
                BackendService.getPageLocation(filter.location, pageindex, pagesize, sortBy)
                    .then (res => processResult(res))
                    .catch( err => errorService.checkError(err));   
                console.log("filterLoc")
            }
            else if (filterUtilizationChanged){                
                BackendService.getPageUtilization(filter.utilization, pageindex, pagesize, sortBy)
                    .then (res => processResult(res))
                    .catch( err => errorService.checkError(err));   
                console.log("filterU")
            }
            else if(textChanged) {                
                SearchService.searchReagentPage(pageindex, pagesize, textToSearch, fieldsToSearch.filter( ({selected}) => selected===true).map(({value}) =>  value ))
                    .then (res => processResult(res))
                    .catch( err => errorService.checkError(err));
                console.log("text")
            }
            else {                
                BackendService.getPage( pageindex, pagesize, sortBy )
                .then (res => processResult(res))
                .catch (e => errorService.checkError(e));
                console.log("general")
            }
            const processResult = result => {                
                setLoading(false);       
                setControlledPageCount(result.data.numPages);  
                setTotalElements(result.data.totalElements);  
                setData(result.data.data);
            }
            
        }        
        
    },[]);    
    
    

    return (
        <>     
        <SpeedDialContext.Provider value={speedDial}>
            <SearchFieldContext.Provider value={{fieldsToSearch, setFieldsToSearch}}>  
                <SearchElementsContext.Provider value={{elementsToSearch, setElementsToSearch}}>
                    <FilterLocationContext.Provider value={{ filterLocation, setFilterLocation }} >
                        <FilterUtilizationContext.Provider value={{ filterUtilization, setFilterUtilization }}>
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
                                filter={filter}                  
                            /> 
                        </FilterUtilizationContext.Provider>  
                    </FilterLocationContext.Provider>
                </SearchElementsContext.Provider>
            </SearchFieldContext.Provider>
        </SpeedDialContext.Provider>
        </>
    )

}
export default ReagentTable;