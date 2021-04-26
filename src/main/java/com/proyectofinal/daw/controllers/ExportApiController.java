package com.proyectofinal.daw.controllers;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.services.ReagentService;
import com.proyectofinal.daw.utils.filegenerators.ReagentExcelExporter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/**
 * Controller for receiving request to export files
 */
@RestController
public class ExportApiController implements BaseApiController {
    
    @Autowired
    ReagentService reagentService;
    

    
    /** 
     * Controller to export a xlsx file of reagents
     * @param response Send the response to the client with the xlsx exported
     */
    @GetMapping("/reagent/export")              
    public void getExcelReagent(HttpServletResponse response)  {

        try {
            response.setContentType("application/octet-stream");
            String headerKey = "Content-Disposition";
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
            String dateString = dateFormat.format(new Date());
            String headerValue = "attachment; filename=reagents_" + dateString + ".xlsx";
            response.setHeader(headerKey, headerValue);
            List <Reagent> listReagents = reagentService.findAll();

            ReagentExcelExporter excelExporter = new ReagentExcelExporter(listReagents);
            excelExporter.export(response);
        }
        catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Error on exporting");
        }       
        
    }

}
