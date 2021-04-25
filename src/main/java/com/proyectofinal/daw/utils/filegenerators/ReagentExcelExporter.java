package com.proyectofinal.daw.utils.filegenerators;

import java.util.List;

import com.proyectofinal.daw.entities.Reagent;


import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;


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
        createCell(row, 1, "English Name", style);       
        createCell(row, 2, "Spanish Name", style);    
        
        
    }

    @Override
    protected void writeDataLines() {
        int rowCount = 1;
 
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setFontHeight(14);
        style.setFont(font);
                 
        for (Object rea : lista) {
            Reagent reagent = (Reagent) rea; 
            Row row = sheet.createRow(rowCount++);
            int columnCount = 0;
             
            createCell(row, columnCount++,reagent.getId(), style);
            createCell(row, columnCount++,reagent.getEnglishName(), style);
            createCell(row, columnCount++,reagent.getSpanishName(), style);
                       
        }
        
    }
    
}
