import React, { useMemo, useState, useCallback, useRef, useEffect, useContext } from 'react';
import BackendService from '../../service/backend/AllReagentService';
import TableBase from './basecomponents/TableBase';

import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ExcelIcon from '../icons/ExcelIcon';
import CSVIcon from '../icons/CSVIcon';

import { useTranslation } from 'react-i18next';
import { SearchFieldContext } from '../../context/SearchFieldContext';
import { SearchElementsContext } from '../../context/SearchElementsContext';
import SearchService from '../../service/backend/SearchService';
import errorService from '../../service/error/ErrorController';
import { FilterLocationContext } from '../../context/utils/FilterLocationContext';
import { FilterUtilizationContext } from '../../context/utils/FilterUtilizationContext';
import { SpeedDialContext } from '../../context/utils/SpeedDialContext';
import { AuthContext } from '../../context/AuthContextProvider';
import reagentPDF from '../../lib/export/ReagentPdf';
import { useHistory } from "react-router-dom";
import { RTCSearchFields, RTCColumns } from '../../lib/tabledata/ReagentTableConf';
import { TableContext } from '../../context/utils/TableContext.js';
import { LocalizationContext } from '../../context/LocalizationContext';



const ReagentTable = () => {
   
    const { t } = useTranslation();
    const TITLE = t('table.title.reagents');
    const { user } = useContext(AuthContext);
    const { language } = useContext(LocalizationContext);    
    const [ data , setData ] = useState([]);     
    const [ loading, setLoading ] = useState(false); 
    const [ controlledPageCount, setControlledPageCount ] = useState(0);
    const [ totalElements, setTotalElements ] = useState (0);
    const fetchIdRef = useRef(0);
    const [ filterLocation, setFilterLocation ] = useState('');
    const [ filterUtilization, setFilterUtilization ] = useState('');
    const [ filter, setFilter ] = useState(null);
    const history = useHistory();
    const columns = useMemo (() => RTCColumns(t));
    const searchFields = RTCSearchFields(t);
    const [ fieldsToSearch, setFieldsToSearch ] = useState(searchFields);
    const [ elementsToSearch, setElementsToSearch ] = useState({});

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
    
    const speedDial = useMemo ( () => {
        const actions = [        ,
            { icon: <SaveIcon />, name: t('table.tooltip.save'), click: () => reagentPDF.generatePdf(undefined, false)},
            { icon: <PrintIcon />, name: t('table.tooltip.print'), click: () => reagentPDF.generatePdf(undefined, true) },
            { icon: <ExcelIcon />, name: t('table.tooltip.excel'), click: () => reagentPDF.generateExcel("Reagents") },
            { icon: <CSVIcon />, name: t('table.tooltip.csv'), click: () => reagentPDF.generateCSV({columns: columns})},
        ];    
        if (user.role.includes("ROLE_ADD_ALL")) {       
            actions.unshift({ icon: <AddIcon /> , name: t('table.tooltip.add'), click: () => history.push("/reagent/add") });
        }
        return actions;
    },[])    
    

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
        <TableContext.Provider value={"InorganicReagent"}>
            <SpeedDialContext.Provider value={speedDial}>
                <SearchFieldContext.Provider value={{fieldsToSearch, setFieldsToSearch}}>  
                    <SearchElementsContext.Provider value={{elementsToSearch, setElementsToSearch}}>
                        <FilterLocationContext.Provider value={{ filterLocation, setFilterLocation }} >
                            <FilterUtilizationContext.Provider value={{ filterUtilization, setFilterUtilization }}>
                                <TableBase 
                                    columns={columns} 
                                    backendService={BackendService} 
                                    loading={loading} 
                                    setLoading={setLoading}
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
        </TableContext.Provider>  
        </>
    )

}
export default ReagentTable;