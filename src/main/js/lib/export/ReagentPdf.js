import ReagentService from '../../service/backend/AllReagentService';
import PdfService from '../../service/export/PdfService';
import CSVService from '../../service/export/CSVService';

class ReagentPdf {

    async generatePdf(params, print = false) {
       
        const data = await ReagentService.getAll();
        const pdfService = new PdfService();
        const toPdf = { 
            data: data,
            headers: [["ID", "English Name", "Nombre Español" ]],
            columns: ["id", "spanishName", "internalReference"],
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
   
}
export default new ReagentPdf();