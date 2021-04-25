import ReagentService from '../../service/backend/AllReagentService';
import PdfService from '../../service/pdf/PdfService';

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
   
}
export default new ReagentPdf();