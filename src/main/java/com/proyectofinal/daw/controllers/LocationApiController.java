package com.proyectofinal.daw.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.proyectofinal.daw.entities.Location;
import com.proyectofinal.daw.services.LocationService;


/**
 * Api controller for locations
 */
@RestController
public class LocationApiController implements BaseApiController {
        

    @Autowired
    LocationService locationService;

    
    /** 
     * Method of the controller to return all locations
     * @return List<Location> All locations of the database
     */
    @GetMapping("/location")              
    public List<Location> getAll() {      
        return locationService.findAll();
    }

}
