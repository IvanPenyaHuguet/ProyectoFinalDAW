import i18next from 'i18next';
import React from 'react';

import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import SelectColumnFilterLocation from '../../components/table/filter/SelectColumnFilterLocation';
import SelectColumnFilterUtilization from '../../components/table/filter/SelectColumnFilterUtilization';


export const RTCSearchFields = [
    {
        value: "spanishName",
        name: i18next.t('table.column.spanishName'),
        selected: true
    },{
        value: "englishName",
        name: i18next.t('table.column.englishName'),
        selected: true
    },{
        value: "cas",
        name: i18next.t('table.column.cas'),
        selected: false
    },{
        value: "internalReference",
        name: i18next.t('table.column.reference'),
        selected: true
    },{
        value: "utilization",
        name: i18next.t('table.column.utilization'),
        selected: false
    },{
        value: "elements.englishName",
        name: i18next.t('table.column.elements'),
        selected: false
    },{
        value: "secondaryIntReference",
        name: i18next.t('table.column.secondaryintreference'),
        selected: true
    }];

export const RTCColumns = [
    {
        Header: i18next.t('table.column.id'),
        accessor: "id",
        show: false,
        disableSortBy: false,
        disableFilters: true 
    },{
        Header: i18next.t('table.column.reference'),
        accessor: "internalReference",
        disableSortBy: false,
        disableFilters: true
    },{
        Header: i18next.t('table.column.spanishName'),
        accessor: "spanishName",
        disableSortBy: false,
        disableFilters: true
    },{
        Header: i18next.t('table.column.englishName'),
        accessor: "englishName",
        show: false,
        disableSortBy: false,
        disableFilters: true
    },{
        Header: i18next.t('table.column.elements'),
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
        Header: i18next.t('table.column.formula'),
        accesor: "formula",
        id: "formula",
        show: false,
        disableSortBy: false,
        disableFilters: true
    },{
        Header: i18next.t('table.column.type'),
        accessor: "reagentType",
        disableSortBy: false,
        disableFilters: true
    },{
        Header: i18next.t('table.column.quantity'),
        accessor: "quantity",
        disableSortBy: false,
        disableFilters: true
    },{
        Header: i18next.t('table.column.location'),
        accessor: "location.name",
        disableSortBy: false,
        disableFilters: false,
        Filter: SelectColumnFilterLocation,            
    },{
        Header: i18next.t('table.column.utilization'),
        accessor: "utilization",
        disableSortBy: true,
        disableFilters: false,
        Filter: SelectColumnFilterUtilization,
    },{
        Header: i18next.t('table.column.cas'),
        accessor: "cas",
        show: false,
        disableSortBy: false,
        disableFilters: true
    },{
        Header: i18next.t('table.column.receptionDate'),
        accessor: "entryDate",
        show: false,
        disableSortBy: false,
        disableFilters: true
    },{
        Header: i18next.t('table.column.boughtBy'),
        accessor: "user.name",
        show: false,
        disableSortBy: true,
        disableFilters: true
    },{
        Header: i18next.t('table.column.molecularWeight'),
        accessor: "molecularWeight",
        show: false,
        disableSortBy: false,
        disableFilters: true
    },{
        Header: i18next.t('table.column.supplier'),
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
]