import React, { useMemo, useState, useCallback, useRef, useContext } from 'react';
import BackendService from '../../service/backend/Services/AqueousStdService';
import TableBase from './basecomponents/TableBase';

import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ExcelIcon from '../icons/ExcelIcon';
import CSVIcon from '../icons/CSVIcon';

import { useTranslation } from 'react-i18next';
import { SearchFieldContext } from '../../context/SearchFieldContext';
import { SearchElementsContext } from '../../context/SearchElementsContext';
import SearchService from '../../service/backend/Search/AqueousStdSearchService';
import errorService from '../../service/error/ErrorController';
import { FilterLocationContext } from '../../context/utils/FilterLocationContext';
import { SpeedDialContext } from '../../context/utils/SpeedDialContext';
import { AuthContext } from '../../context/AuthContextProvider';
import reagentPDF from '../../lib/export/ReagentPdf';
import { useHistory } from "react-router-dom";
import { RTCSearchFields, RTCColumns } from '../../lib/tabledata/AqueousStdConf';
import { TableContext } from '../../context/utils/TableContext.js';



const ReagentTable = () => {
   
    const { t } = useTranslation();
    const TITLE = t('table.title.reagents.aqueousstd');
    const { user } = useContext(AuthContext);      
    const [ data , setData ] = useState([]);     
    const [ loading, setLoading ] = useState(false); 
    const [ controlledPageCount, setControlledPageCount ] = useState(0);
    const [ totalElements, setTotalElements ] = useState (0);
    const fetchIdRef = useRef(0);   
    const [ filter, setFilter ] = useState(null);
    const history = useHistory();
    const columns = useMemo (() => RTCColumns(t),[]);
    const searchFields = useMemo (() => RTCSearchFields(t),[]);
    const [ fieldsToSearch, setFieldsToSearch ] = useState(searchFields);
    const [ elementsToSearch, setElementsToSearch ] = useState({});

    const previousStates = useRef({
        elements: [],
        text: '',
        pageIndex: 0,
        pageSize: 10,
        location: '',        
        sortBy: {},
        previous: 0,
    })
    
    
    const speedDial = useMemo ( () => {
        const actions = [];    
        if (user.role.includes("ROLE_ADD_ALL")) {       
            actions.unshift({ icon: <AddIcon /> , name: t('table.tooltip.add'), click: () => history.push("/reagent/add") });
        }
        return actions;
    },[])    
    

    const fetchData = useCallback((pageindex, pagesize, textToSearch, elementsToSearch, sortBy, filter) => {
        const fetchId = ++fetchIdRef.current;
        const filterLocationChanged = filter ? filter.location  !== previousStates.current.location && filter.location !== '0' && filter.location != null : false;
        const elementsChanged = elementsToSearch && Object.keys(elementsToSearch).length > 0 && elementsToSearch != previousStates.current.elements;
        const textChanged = textToSearch !== previousStates.current.text;
        const sortByChanged = sortBy !== previousStates.current.sortBy;
        const pageChanged = pageindex !== previousStates.current.pageIndex || pagesize !== previousStates.current.pageSize;

                
        if (fetchId === fetchIdRef.current) {
            
            setLoading(true);

            if ( elementsChanged || ( pageChanged && previousStates.current.previous == 'E')) {
                previousStates.current.elements = elementsToSearch;
                previousStates.current.previous = 'E'; 
                (SearchService.searchReagentByElements(pageindex, pagesize, elementsToSearch)
                    .then (res => processResult(res))
                    .catch( err => errorService.checkError(err)));                
            }
            else if (filterLocationChanged || ( (sortByChanged || pageChanged) && previousStates.current.previous == 'L')){
                previousStates.current.location = filter.location;
                previousStates.current.previous = 'L';               
                BackendService.getPageLocation(filter.location, pageindex, pagesize, sortBy)
                    .then (res => processResult(res))
                    .catch( err => errorService.checkError(err));  
            }            
            else if(textChanged || ( pageChanged && previousStates.current.previous == 'T')) {  
                previousStates.current.text = textToSearch;
                previousStates.current.previous = 'T';              
                SearchService.searchReagentPage(pageindex, pagesize, textToSearch, fieldsToSearch.filter( ({selected}) => selected===true).map(({value}) =>  value ))
                    .then (res => processResult(res))
                    .catch( err => errorService.checkError(err));                
            }
            else {   
                previousStates.current.previous = 'G';              
                BackendService.getPage( pageindex, pagesize, sortBy )
                .then (res => processResult(res))
                .catch (e => errorService.checkError(e));                
            }
            
            const processResult = result => {                
                setLoading(false);       
                setControlledPageCount(result.data.numPages);  
                setTotalElements(result.data.totalElements);  
                setData(result.data.data);
                previousStates.current.sortBy = sortBy;
                previousStates.current.pageIndex = pageindex;
                previousStates.current.pageSize = pagesize;                
            }            
        }       
    },[]);    
    
    return (
        <>   
            <TableContext.Provider value={"AqueousSol"}>
                <SpeedDialContext.Provider value={speedDial}>
                    <SearchFieldContext.Provider value={{fieldsToSearch, setFieldsToSearch}}>  
                        <SearchElementsContext.Provider value={{elementsToSearch, setElementsToSearch}}>
                            <FilterLocationContext.Provider value={{ filter, setFilter }} >                                
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
                            </FilterLocationContext.Provider>
                        </SearchElementsContext.Provider>
                    </SearchFieldContext.Provider>
                </SpeedDialContext.Provider>
            </TableContext.Provider>  
        </>
    )

}
export default ReagentTable;