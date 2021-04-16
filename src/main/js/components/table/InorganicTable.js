import React, { useMemo, useState, useEffect } from 'react';
import BackendService from '../../service/backend/AllReagentService';
import TableBase from './basecomponents/TableBase';




export default function InorganicTable () {
    
    const [ data , setData] = useState ([]);
    useEffect( async () => {
        const result = await BackendService.getAll();
        setData(result.data);        
    }, []);
    const memodata = useMemo(() => data
    , [data]);

    const columns = useMemo (() => [
        {
            Header: "ID",
            accessor: "id"
        },{
            Header: "Reference",
            accessor: "internalReference"
        },{
            Header: "Spanish Name",
            accessor: "spanishName"
        },{
            Header: "English Name",
            accessor: "englishName"
        },{
            Header: "Type",
            accessor: "reagentType"
        }

    ]);

    return (
        <>       
            {memodata && <TableBase columns={columns} tabledata={memodata} />}
        </>
    )

}