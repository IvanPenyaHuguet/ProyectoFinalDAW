package com.proyectofinal.daw.controllers;


import java.util.List;
import java.util.Optional;

import com.proyectofinal.daw.entities.InorganicReagent;
import com.proyectofinal.daw.entities.OrganicReagent;
import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.services.ReagentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



/**
 * Main controller for the REST api, only for reagents models
 */
@RestController
public class ReagentsApiController implements BaseApiController{   
    
    @Autowired
    ReagentService reagentService;    
    
  
    @GetMapping("/reagent")              
    public List<Reagent> getAll() {      
        return reagentService.findAll();
    }

    @PreAuthorize("hasRole('ADMIN') OR hasRole('TECH')")
    @GetMapping("/reagent/{id}")           
    public Reagent getById(@PathVariable Long id) {      
        return reagentService.findById(id)
            .orElseThrow(() -> new ReagentNotFoundException(id));
    }
       
    @DeleteMapping("/reagent/{id}") 
    @PreAuthorize("hasRole('ADMIN') OR hasRole('TECH')")           
    public boolean deleteById(@PathVariable Long id) {      
        return reagentService.deleteById(id);
    }

    @PostMapping("/reagent")
    public boolean add (@RequestBody Reagent newReagent) {
        return reagentService.save(newReagent);
    }    

    @PutMapping("/reagent/{id}")
    public Reagent replaceReagent(@RequestBody Reagent newReagent, @PathVariable Long id) {
        
        return reagentService.modifyReagent(newReagent, id);
    }


    
    

}
