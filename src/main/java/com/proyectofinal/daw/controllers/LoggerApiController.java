package com.proyectofinal.daw.controllers;

import com.proyectofinal.daw.entities.dto.ClientLogDTO;
import com.proyectofinal.daw.services.logger.ClientLoggerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


/**
 * Api Controller for receiving the logs from clients
 */
@RestController
public class LoggerApiController implements BaseApiController {

    @Autowired
    ClientLoggerService clientLoggerService;

    
    /** 
     * Receve a log from the client
     * @param clientLogDTO DTO object to receive a log message from client
     */
    @PostMapping("/logger")
    public void clientLogging (@RequestBody ClientLogDTO clientLogDTO) {
        clientLoggerService.logMessage(clientLogDTO);
    }
    
}
