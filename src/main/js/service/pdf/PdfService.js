import jsPDF from "jspdf";
import "jspdf-autotable";
import dateUtil from '../../lib/utils/DateUtil';

export default class PdfService { 


    constructor (size = "A4", orientation = "portrait", unit="pt") {
        this.size = size;
        this.orientation = orientation;
        this.unit = unit;
    }

    generatePdfDownloadable(data) {
        const doc = new jsPDF (this.orientation, this.unit, this.size);
        const marginLeft = data.marginLeft || 40;
        doc.setFontSize( data.fontSize || 15);
        const totalPagesExp = '{total_pages_count_string}' 

        const body = data.data.data.map(ele => {
            const toReturn = [];
            data.columns.forEach(element => {
                toReturn.push(ele[element])
            });
            return toReturn;
        });
        
        const footer = (HookData) => {            
            const footerString = "Página " + HookData.pageNumber + " de "+  totalPagesExp;
            doc.setFontSize(10);            
            doc.text(footerString, marginLeft + 300, doc.internal.pageSize.height - 30);
        }

        const content = {
            startY: data.startY || 50,
            head: data.headers,
            body: body,
            styles: {
                theme: 'grid'
            },
            didDrawPage: footer            
        }
        console.log(data);
        doc.text(data.title, marginLeft, 40);
        doc.autoTable(content);
        if (typeof doc.putTotalPages === 'function') { 
            doc.putTotalPages(totalPagesExp) 
        } 
        doc.save(data.title + " on " + dateUtil.getDayMonthYear());
    }

    generatePdfPrint(data) {
        const doc = new jsPDF (this.orientation, this.unit, this.size);
        const marginLeft = data.marginLeft || 40;
        doc.setFontSize( data.fontSize || 15);

        const body = data.map( (ele,ind) => [ ele.id, ele.spanishName ]);

        const content = {
            startY: data.startY || 50,
            head: data.headers,
            body: body,
            styles: {
                theme: 'grid'
            }             
        }

        doc.text(data.title, marginLeft, 40);
        doc.autoTable(content);
        doc.autoPrint({variant: 'non-conform'});
        doc.save(data.title + " on " + dateUtil.getDayMonthYear());
    }

}


