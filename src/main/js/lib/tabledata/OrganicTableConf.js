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
        value: "elements.englishName",
        name: t('table.column.elements'),
        selected: false
    },{
        value: "secondaryIntReference",
        name: t('table.column.secondaryintreference'),
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
        Header: t('table.column.spanishName'),
        accessor: "name",
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
        Header: t('table.column.formula'),
        accessor: "formula",
        id: "formula",
        show: false,
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
        disableSortBy: true,
        disableFilters: false,
        Filter: SelectColumnFilterLocation,            
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
        accessor: "suppliers",
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
]};