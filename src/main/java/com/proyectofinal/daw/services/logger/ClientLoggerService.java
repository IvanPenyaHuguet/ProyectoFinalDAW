package com.proyectofinal.daw.services.logger;

import com.proyectofinal.daw.entities.dto.ClientLogDTO;

import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Service to generate logs from the client
 */
@Service
public class ClientLoggerService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ClientLoggerService.class);
    
    
    /** 
     * Main function to get a log from client and print on server
     * @param clientLogDTO DTO Object for getting the log information from client
     */
    public void logMessage (ClientLogDTO clientLogDTO) {
        
        switch (clientLogDTO.getLevel().toUpperCase()) {
            case "INFO": LOGGER.info(clientLogDTO.getUsuario() + ": " + clientLogDTO.getMessage()); 
                        break;
            case "ERROR": LOGGER.error(clientLogDTO.getUsuario() + ": " + clientLogDTO.getMessage()); 
                        break;
            case "WARN": LOGGER.warn(clientLogDTO.getUsuario() + ": " + clientLogDTO.getMessage()); 
                        break;
            case "TRACE": LOGGER.trace(clientLogDTO.getUsuario() + ": " + clientLogDTO.getMessage()); 
                        break;
            default: LOGGER.trace(clientLogDTO.getUsuario() + ": " + clientLogDTO.getMessage()); 
                        break;
        }
    }
}
