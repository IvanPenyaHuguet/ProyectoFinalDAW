import React, { useMemo, useState, useCallback, useRef } from 'react';
import BackendService from '../../service/backend/AllReagentService';
import TableBase from './TableBase';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';




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
            Header: "Elements",
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
            }
        },{
            Header: "Formula",
            accesor: "formula",
            id: "formula",
            show: false
        },{
            Header: "Type",
            accessor: "reagentType"
        },{
            Header: "Quantity",
            accessor: "quantity"
        },{
            Header: "Location",
            accessor: "location.name"
        },{
            Header: "Utilization",
            accessor: "utilization"
        },{
            Header: "CAS",
            accessor: "cas",
            show: false
        },{
            Header: "Reception Date",
            accessor: "entryDate",
            show: false
        },{
            Header: "Bought By",
            accessor: "user.name",
            show: false
        },{
            Header: "Molecular Weight",
            accessor: "molecularWeight",
            show: false
        },{
            Header: "Supplier",
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
            }
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