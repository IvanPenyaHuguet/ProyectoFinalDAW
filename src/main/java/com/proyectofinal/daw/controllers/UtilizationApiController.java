package com.proyectofinal.daw.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.proyectofinal.daw.services.ReagentService;

@RestController
public class UtilizationApiController implements BaseApiController {
    
    @Autowired
    ReagentService reagentService;

    @GetMapping("/utilization")              
    public List<String> getAll() {      
        return reagentService.findAllUtilization();
    }
}
