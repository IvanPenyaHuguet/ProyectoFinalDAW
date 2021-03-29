import React, { useMemo, useState, useCallback, useRef } from 'react';
import BackendService from '../../service/backend/AllReagentService';
import TableBase from './TableBase';




const ReagentTable = () => {
   
    const TITLE = "REAGENTS";
    const [ data , setData ] = useState([]);   
    const [ loading, setLoading ] = useState(false); 
    const [ controlledPageCount, setControlledPageCount ] = useState(0);
    const [ totalElements, setTotalElements ] = useState (0);
    const fetchIdRef = useRef(0);

    const columns = useMemo (() => [
        {
            Header: "ID",
            accessor: "id",
            show: false
        },{
            Header: "Reference",
            accessor: "internalReference"
        },{
            Header: "Spanish Name",
            accessor: "spanishName"
        },{
            Header: "English Name",
            accessor: "englishName",
            show: false
        },{
            Header: "Type",
            accessor: "reagentType"
        },{
            Header: "Quantity",
            accessor: "quantity"
        },{
            Header: "CAS",
            accessor: "cas"
        },{
            Header: "Reception Date",
            accessor: "entryDate",
            show: false
        },{
            Header: "Molecular Weight",
            accessor: "molecularWeight"
        },{
            Header: "Supplier",
            accesor: "suppliers.name",
            show: false
        }

    ], []);
    

    const fetchData = useCallback((pageindex, pagesize) => {
        const fetchId = ++fetchIdRef.current;
               
        if (fetchId === fetchIdRef.current) {
            setLoading(true);
            BackendService.getPage( pageindex, pagesize )
            .then (result => {
                setLoading(false);       
                setControlledPageCount(result.data.numPages);  
                setTotalElements(result.data.totalElements);  
                setData(result.data.data);                
            });           
        }     
    },[]);
   
    

    return (
        <>       
            <TableBase 
            columns={columns} 
            backendService={BackendService} 
            loading={loading} 
            data={data} 
            controlledPageCount={controlledPageCount} 
            totalElements={totalElements}
            title={TITLE}
            fetchData={fetchData}
            />
        </>
    )

}
export default ReagentTable;