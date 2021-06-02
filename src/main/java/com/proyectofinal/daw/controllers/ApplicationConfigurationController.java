package com.proyectofinal.daw.controllers;

import java.util.List;

import com.proyectofinal.daw.entities.config.ApplicationConfiguration;
import com.proyectofinal.daw.repositories.ApplicationConfigurationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplicationConfigurationController implements BaseApiController{ 

    @Autowired
    ApplicationConfigurationRepository paramsRepo;

    @GetMapping("/configparams")
    public List<ApplicationConfiguration> getConfigurationParams () {
        return paramsRepo.findAll();
    }
    
}
