package com.proyectofinal.daw.utils.filegenerators;

import java.io.IOException;
import java.util.List;
 
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
 
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * Abstract class with all the methods required to generate excel of entities
 */
public abstract class ExcelExporterBaseImpl {
    protected XSSFWorkbook workbook;
    protected XSSFSheet sheet;
    protected List<?> lista;
     
    public ExcelExporterBaseImpl(List<?> lista) {
        this.lista = lista;
        workbook = new XSSFWorkbook();
    }
    
    /** 
     * Create a xlsx cell
     * @param row Row to generate the cell
     * @param columnCount Position in the row of the cell
     * @param value Value to put on the cell
     * @param style Styles to implement on the cell
     */
    protected void createCell(Row row, int columnCount, Object value, CellStyle style) {
        sheet.autoSizeColumn(columnCount);
        Cell cell = row.createCell(columnCount);
        if (value instanceof Integer) {
            cell.setCellValue((Integer) value);
        } 
        else if (value instanceof Boolean) {
            cell.setCellValue((Boolean) value);
        }
        else if (value instanceof Long) {
            cell.setCellValue((Long) value);
        }
        else {
            cell.setCellValue((String) value);
        }
        cell.setCellStyle(style);
    }
 
 
    
    /** 
     * Method to implement that generates the header
     */
    protected abstract void writeHeaderLine();   
    
    /** 
     * Method to implement that generates the data
     */
    protected abstract void writeDataLines();

    
    /** 
     * Method to export the xlsx on the response
     * @param response Response to add the generated xlsx
     * @throws IOException Exception thrown if can not open strean
     */
    public void export(HttpServletResponse response) throws IOException {
        writeHeaderLine();
        writeDataLines();
         
        ServletOutputStream outputStream = response.getOutputStream();
        workbook.write(outputStream);
        workbook.close();
         
        outputStream.close();
        
    }  
}
