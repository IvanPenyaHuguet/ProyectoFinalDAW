package com.proyectofinal.daw.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.proyectofinal.daw.entities.AqueousStandardSolution;
import com.proyectofinal.daw.entities.StandardSol;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.services.StdSolService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Api controller for aqueuous standard controller
 */
@RestController
public class AqueousStdSolController implements BaseApiController{
    
    private static final Logger LOGGER = LoggerFactory.getLogger(AqueousStdSolController.class);
    
    @Autowired
    StdSolService reagentService;
     

    /** 
     * Map to return a reagent by id
     * @param id The id of the reagent
     * @return Reagent Reagent found by id
     */
    @PreAuthorize("hasRole('ROLE_EDIT_ALL')")
    @GetMapping("/standard/aqueous/{id}")           
    public StandardSol getById(@PathVariable Long id) {      
        return reagentService.findById(id, AqueousStandardSolution.class)
            .orElseThrow(() -> new ReagentNotFoundException(id));
    }

}
