package com.proyectofinal.daw.services;

import java.util.List;

import com.proyectofinal.daw.entities.Location;
import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.exceptions.LocationNotFoundException;
import com.proyectofinal.daw.repositories.LocationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
 
@Service
public class LocationService {

    private static final Logger LOGGER = LoggerFactory.getLogger(LocationService.class);
    
    @Autowired
    LocationRepository locationRepo;

    public List<Location> findAll() {
        return (List<Location>) locationRepo.findAll();
    }

    public boolean deleteById(Long id) {
        boolean deleted = false;        
        if (locationRepo.existsById(id)) {
            locationRepo.deleteById(id);
            deleted = true;
        } 
        return deleted;
    }

    public Location findById(Long id) {       
        return locationRepo.findById(id).orElseThrow(() -> new LocationNotFoundException(id));        
    }    
    
    public Location save (Location newLoc) {
        
        try {
            Location location = locationRepo.findById(newLoc.getId())
            .orElse(new Location());
            
            location.setName(newLoc.getName());
            location.setViewOrder(newLoc.getViewOrder());          
            

            LOGGER.info("Has received a request to save a location");           
            return locationRepo.save(location);   
        } 
        catch (Exception e) {
            LOGGER.warn("Has received a request to save a location and something bad happened. ");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Data to save is invalid.");
        } 
        
    }

    public Location modifyByLocation (Location toChange) {
        
        return locationRepo.findById(toChange.getId())
        .map(loc-> {
            loc.setName(toChange.getName());
            loc.setReagents(toChange.getReagents()); 
            loc.setSolutions(toChange.getSolutions());         
            return locationRepo.save(loc);
        })
        .orElseThrow(() -> new LocationNotFoundException(toChange.getId()));        
    }
    
    public Location addReagentById (Long id, Reagent toAdd) {
        
        return locationRepo.findById(id)
        .map(loc-> {
            loc.getReagents().add(toAdd);
            loc.setReagents(loc.getReagents());
            LOGGER.info("Saved new reagent to the location: " + id);                    
            return locationRepo.save(loc);
        })
        .orElseThrow(() -> new LocationNotFoundException(id));        
    }
}
