package com.proyectofinal.daw.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    /** 
     * Map to delete a location
     * @param id The id of the location
     * @return boolean The result of the delete
     */
    @DeleteMapping("/location/{id}") 
    @PreAuthorize("hasRole('ROLE_DELETE_LOCATION')")           
    public boolean deleteById(@PathVariable Long id) {      
        return locationService.deleteById(id);
    }

    /** 
     * Map to update a location
     * @param newlocation The new location params      
     * @return location The updated location ressultant
     */
    @PutMapping("/location")
    @PreAuthorize("hasRole('ROLE_ADD_LOCATION')")
    public Location replaceOrAddLocation(@RequestBody Location location) {        
        return locationService.save(location);
    }

}
