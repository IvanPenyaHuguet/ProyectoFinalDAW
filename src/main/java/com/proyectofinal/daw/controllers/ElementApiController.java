package com.proyectofinal.daw.controllers;

import java.util.List;

import com.proyectofinal.daw.entities.Element;
import com.proyectofinal.daw.repositories.ElementRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * Controller for receiving request for table elements
 */
@RestController
public class ElementApiController implements BaseApiController {
    
    @Autowired
    ElementRepository elementRepository;

    
    /** 
     * Method of the controller to return all elements info
     * @return List<Location> All elements of the database
     */
    @GetMapping("/element")              
    public List<Element> getAll() {      
        return elementRepository.findAll();
    }
}
