package com.proyectofinal.daw.utils.filegenerators;

import java.util.List;

import com.proyectofinal.daw.entities.Reagent;


import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;


/**
 * Implemented method to generate the excel of reagents
 */
public class ReagentExcelExporter extends ExcelExporterBaseImpl {

    public ReagentExcelExporter(List<Reagent> lista) {
        super(lista);        
    }

    @Override
    protected void writeHeaderLine() {
        sheet = workbook.createSheet("Reagent");
         
        Row row = sheet.createRow(0);
         
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setBold(true);
        font.setFontHeight(16);
        style.setFont(font);
         
        createCell(row, 0, "ID", style); 
        createCell(row, 1, "Internal Reference", style);     
        createCell(row, 2, "English Name", style);       
        createCell(row, 3, "Spanish Name", style);
        createCell(row, 4, "Formula", style);  
        createCell(row, 5, "Quantity", style);
        createCell(row, 6, "CAS", style);
        createCell(row, 7, "Reception Date", style);
        createCell(row, 8, "Location", style);
        createCell(row, 9, "Bought By", style);
        createCell(row, 10, "Molecular Weight", style);         
        
    }

    @Override
    protected void writeDataLines() {
        int rowCount = 1;
 
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setFontHeight(14);
        style.setFont(font);
              
        try {
            for (Object rea : lista) {
                Reagent reagent = (Reagent) rea; 
                Row row = sheet.createRow(rowCount++);
                int columnCount = 0;
                 
                createCell(row, columnCount++,reagent.getId(), style);
                createCell(row, columnCount++,reagent.getInternalReference(), style);
                createCell(row, columnCount++,reagent.getEnglishName(), style);
                createCell(row, columnCount++,reagent.getName(), style);
                createCell(row, columnCount++,reagent.getFormula(), style);
                createCell(row, columnCount++,reagent.getQuantity(), style);
                createCell(row, columnCount++,reagent.getCas(), style);
                createCell(row, columnCount++,reagent.getEntryDate(), style);
                createCell(row, columnCount++,reagent.getLocation() != null ? reagent.getLocation().getName() : "", style);
                createCell(row, columnCount++,reagent.getUserBuyer() != null ? reagent.getUserBuyer().getName() : "", style);
                createCell(row, columnCount++,Float.toString(reagent.getMolecularWeight()), style);         
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Data to save is invalid.");
        }
                
    }
    
}
