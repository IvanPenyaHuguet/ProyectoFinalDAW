import ReagentService from '../../service/backend/AllReagentService';
import PdfService from '../../service/export/PdfService';
import CSVService from '../../service/export/CSVService';
import { elements } from '../../components/periodictable/DataPeriodicTable';

class ReagentPdf {

    async generatePdf(params, print = false) {
        
        const data = await ReagentService.getAll();
        const pdfService = new PdfService({orientation: 'landscape'});
        const toPdf = { 
            data: data,
            headers: [params.columns.map(({Header, accessor}) =>{
                if (accessor != 'elements' 
                && accessor != 'suppliers' 
                && accessor != 'molecularWeight'
                && accessor != 'user.name'
                && accessor != 'englishName'
                && accessor != 'cas')
                    return Header;
            }  )],
            columns: params.columns.map(({accessor}) => {
                if (accessor != 'elements' 
                && accessor != 'suppliers' 
                && accessor != 'molecularWeight'
                && accessor != 'user.name'
                && accessor != 'englishName'
                && accessor != 'cas')                    
                    return accessor;
            }),
            title: "REAGENTS"
        };        

        print === true ?  pdfService.generatePdfPrint(toPdf) :  pdfService.generatePdfDownloadable(toPdf);

       
    }

    async generateCSV (params) {
        const data = await ReagentService.getAll();
        const columns = params.columns;   
        const csvService = new CSVService();
        csvService.generateCSV(data, columns);
    }

    async generateExcel (title){
        await ReagentService.getExcelExport(title);
    }
   
}
export default new ReagentPdf();