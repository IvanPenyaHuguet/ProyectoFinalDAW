import jsPDF from "jspdf";
import "jspdf-autotable";
import dateUtil from '../../lib/utils/DateUtil';
import i18next from 'i18next';


export default class PdfService { 


    constructor ({size = "A4", orientation = "portrait", unit="pt"}) {
        this.size = size;
        this.orientation = orientation;
        this.unit = unit;
        this.totalPagesExp = '{total_pages_count_string}';
    }

    generatePdfDownloadable(data) {        
        const doc = new jsPDF (this.orientation, this.unit, this.size);
        const marginLeft = data.marginLeft || 40;
        doc.setFontSize( data.fontSize || 15);
        
         

        const body = data.data.data.map(ele => {
            const toReturn = [];
            data.columns.forEach(element => {
                toReturn.push(ele[element])
            });
            return toReturn;
        });      
        

        const content = {
            startY: data.startY || 50,
            head: data.headers,
            body: body,
            styles: {
                theme: 'grid'
            },
            didDrawPage: (hookdata) => this.layout(hookdata, doc)            
        }        
        doc.text(data.title, marginLeft, 40);
        doc.autoTable(content);
        if (typeof doc.putTotalPages === 'function') { 
            doc.putTotalPages(this.totalPagesExp) 
        } 
        doc.save(data.title + " on " + dateUtil.getDMYHM());
    }

    generatePdfPrint(data) {
        const doc = new jsPDF (this.orientation, this.unit, this.size);
        const marginLeft = data.marginLeft || 40;
        doc.setFontSize( data.fontSize || 15);
        

        const body = data.data.data.map(ele => {
            const toReturn = [];
            data.columns.forEach(element => {
                toReturn.push(ele[element])
            });
            return toReturn;
        });

        const content = {
            startY: data.startY || 50,
            head: data.headers,
            body: body,
            styles: {
                theme: 'grid'
            },
            didDrawPage: (hookdata) => this.layout(hookdata, doc)             
        }

        doc.text(data.title, marginLeft, 40);
        doc.autoTable(content);
        if (typeof doc.putTotalPages === 'function') { 
            doc.putTotalPages(this.totalPagesExp) 
        } 
        doc.autoPrint();        
        window.open(doc.output('bloburl'), '_blank');        
    }

    layout(HookData, doc) {        
        const footerString = i18next.t('pdf.footer.page') + " " + HookData.pageNumber + " " + i18next.t('pdf.footer.of') + " " +  this.totalPagesExp;
        const headerString = dateUtil.getDayMonthYear();
        doc.setFontSize(10);            
        doc.text(footerString, 500 , doc.internal.pageSize.height - 30);
        doc.setFontSize(12);
        doc.text(headerString, 500, 30 );
    }

}


