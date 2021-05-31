import React from 'react';

import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import SelectColumnFilterLocation from '../../components/table/filter/SelectColumnFilterLocation';


export const RTCSearchFields = t => { return [
    {
        value: "name",
        name: t('table.column.spanishName'),
        selected: true
    },{
        value: "internalReference",
        name: t('table.column.reference'),
        selected: true
    },{
        value: "elements.englishName",
        name: t('table.column.elements'),
        selected: true
    },{
        value: "medium",
        name: t('table.column.medium'),
        selected: true
    }];
};

export const RTCColumns = t => {return [
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
        Header: t('table.column.name'),
        accessor: "name",
        disableSortBy: false,
        disableFilters: true
    },{
        Header: t('table.column.elements'),
        accessor: "elements",
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
        Header: t('table.column.location'),
        accessor: "location.name",
        disableSortBy: true,
        disableFilters: false,
        Filter: SelectColumnFilterLocation,            
    },{
        Header: t('table.column.receptionDate'),
        accessor: "entryDate",
        show: false,
        disableSortBy: false,
        disableFilters: true
    },{
        Header: t('table.column.expiryDate'),
        accessor: "expiryDate",
        show: false,
        disableSortBy: false,
        disableFilters: true
    },{
        Header: t('table.column.medium'),
        accessor: "medium",
        show: true,
        disableSortBy: false,
        disableFilters: true
    },{
        Header: t('table.column.supplier'),
        accessor: "suppliers",
        id: "suppliers",
        show: false,
        Cell: row => {
            const suppliers = row.row.original.suppliers;             
            return (
                <>
                    {Object.keys(suppliers).map((item, i) => (
                        <div key={suppliers[item].supplier ? suppliers[item].supplier.id : i}>
                            <span className="">
                            {suppliers[item].supplier?.name} 
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
]};