package com.proyectofinal.daw.controllers;


import java.util.List;

import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.services.ReagentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



/**
 * Main controller for the REST api, only for reagents models
 */
@Controller
@RequestMapping("/reagent")
public class ReagentsApiController implements BaseApiController{   
    
    @Autowired
    ReagentService reagentService;
    
    /** 
     * @return List<Reagent>
     */
    @GetMapping("/all")           
    public List<Reagent> getAll() {      
        return reagentService.findAll();
    }

    
    @DeleteMapping("/{id}")           
    public boolean deleteById(@PathVariable Long id) {      
        return reagentService.deleteById(id);
    }

    // @PostMapping("/")
    // public boolean add () {
    //     return reagentService
    // }

    @GetMapping("/{id}")           
    public Reagent getById(@PathVariable Long id) {      
        return reagentService.findById(id);
    }
    

}
