import React, { useMemo, useState, useCallback, useRef } from 'react';
import BackendService from '../../service/backend/AllReagentService';
import TableBase from './TableBase';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import { useTranslation } from 'react-i18next';


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
            show: false
        },{
            Header: t('table.column.reference'),
            accessor: "internalReference"
        },{
            Header: t('table.column.spanishName'),
            accessor: "spanishName"
        },{
            Header: t('table.column.englishName'),
            accessor: "englishName",
            show: false
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
            }
        },{
            Header: t('table.column.formula'),
            accesor: "formula",
            id: "formula",
            show: false
        },{
            Header: t('table.column.type'),
            accessor: "reagentType"
        },{
            Header: t('table.column.quantity'),
            accessor: "quantity"
        },{
            Header: t('table.column.location'),
            accessor: "location.name"
        },{
            Header: t('table.column.utilization'),
            accessor: "utilization"
        },{
            Header: t('table.column.cas'),
            accessor: "cas",
            show: false
        },{
            Header: t('table.column.receptionDate'),
            accessor: "entryDate",
            show: false
        },{
            Header: t('table.column.boughtBy'),
            accessor: "user.name",
            show: false
        },{
            Header: t('table.column.molecularWeight'),
            accessor: "molecularWeight",
            show: false
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