package com.proyectofinal.daw.controllers;

import java.util.List;

import com.proyectofinal.daw.entities.Supplier;
import com.proyectofinal.daw.services.SuppliersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Api controller for manage suppliers of reagents and standards
 */
@RestController
public class SuppliersApiController implements BaseApiController {

    @Autowired
    SuppliersService suppliersService;

    
    /** 
     * Map to return all different utilizations
     * @return List<Supplier> Of all different utilization of suppliers
     */
    @GetMapping("/supplier")              
    public List<Supplier> getAll() {      
        return suppliersService.findAll();
    }
    
}
