package com.proyectofinal.daw.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.proyectofinal.daw.services.ReagentService;

/**
 * Api controller for manage utilization of reagents
 */
@RestController
public class UtilizationApiController implements BaseApiController {
    
    @Autowired
    ReagentService reagentService;

    
    /** 
     * Map to return all different utilizations
     * @return List<String> Of all different utilization of reagents
     */
    @GetMapping("/utilization")              
    public List<String> getAll() {      
        return reagentService.findAllUtilization();
    }
}
