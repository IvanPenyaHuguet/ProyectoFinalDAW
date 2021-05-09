package com.proyectofinal.daw.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.proyectofinal.daw.entities.ReferenceMask;
import com.proyectofinal.daw.services.ReferenceMaskService;


/**
 * Api controller for reference mask, used on internal references
 */
@RestController
public class ReferenceMaskController implements BaseApiController {
    
    @Autowired
    ReferenceMaskService refMaskService;

    
    /** 
     * Method of the controller to return all reference mask
     * @return List<ReferenceMask> All reference mask of the database
     */
    @GetMapping("/refmask")              
    public List<ReferenceMask> getAll() {      
        return refMaskService.findAll();
    }
}
