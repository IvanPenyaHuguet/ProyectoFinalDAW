import dateUtil from '../../lib/utils/DateUtil';
import i18next from 'i18next';


export default class CSVService { 


    generateCSV(data, columns, delimiter) {        
        const columnDelimiter = delimiter ? delimiter.column ? delimiter.column : "; " : "; ";
        const lineDelimiter = delimiter ? delimiter.line ? delimiter.line : "\n" : "\n" ;
        const arrayDelimiter = delimiter ? delimiter.array ? delimiterarray : ", " : ", ";
        const title = dateUtil.getDMYHM();
        console.log(data.data)
        console.log(columns)
        let datacsv = "";
        columns.forEach( (col, index) => {
            datacsv += col.Header;
            datacsv += index < (columns.length-1) ? columnDelimiter : lineDelimiter;                
        });
        data.data.forEach( row => {            
            columns.forEach( (col, index) => {
                if (Array.isArray(row[col.accessor])) {
                    row[col.accessor].forEach( (field, ind) => {
                        datacsv += field.name ? field.name : field.supplier.name;
                        datacsv += ind < (row[col.accessor].length-1) ? arrayDelimiter : '';
                    })
                } 
                else {
                    datacsv += row[col.accessor] != undefined ? row[col.accessor] : null; 
                }                
                datacsv += index < (columns.length-1) ? columnDelimiter : lineDelimiter;               
            });            
        });        
        const hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(datacsv);
        hiddenElement.target = '_blank';
        hiddenElement.download = title + '.csv';
        hiddenElement.click();     
    }

   

}