package com.proyectofinal.daw.controllers;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.services.ReagentService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



/**
 * Api controller for reagents related requests
 */
@RestController
public class ReagentsApiController implements BaseApiController{  
    
    private static final Logger LOGGER = LoggerFactory.getLogger(ReagentsApiController.class);
    
    @Autowired
    ReagentService reagentService;    
    
  
    
    /** 
     * Map to return all reagents
     * @return List<Reagent> Of all reagents in database
     */
    @GetMapping("/reagent")              
    public List<Reagent> getAll() {      
        return reagentService.findAll();
    }

    
    /** 
     * Map to return a reagent by id
     * @param id The id of the reagent
     * @return Reagent Reagent found by id
     */
    @PreAuthorize("hasRole('ROLE_EDIT_ALL')")
    @GetMapping("/reagent/{id}")           
    public Reagent getById(@PathVariable Long id) {      
        return reagentService.findById(id)
            .orElseThrow(() -> new ReagentNotFoundException(id));
    }
       
    
    /** 
     * Map to delete a reagent
     * @param id The id of the reagent
     * @return boolean The result of the delete
     */
    @DeleteMapping("/reagent/{id}") 
    @PreAuthorize("hasRole('ROLE_EDIT_ALL')")           
    public boolean deleteById(@PathVariable Long id) {      
        return reagentService.deleteById(id);
    }

    
    /** 
     * Map to add a reagent
     * @param newReagent Reagent to add to database
     * @return boolean The result ofd the save reagent
     */
    @PostMapping("/reagent")
    public boolean add (@RequestBody Reagent newReagent) {
        return reagentService.save(newReagent);
    }    

    
    /** 
     * Map to update a reagent
     * @param newReagent The new reagent params 
     * @param id Id of the reagent to update
     * @return Reagent The updated reagent ressultant
     */
    @PutMapping("/reagent/{id}")
    public Reagent replaceReagent(@RequestBody Reagent newReagent, @PathVariable Long id) {
        
        return reagentService.modifyReagent(newReagent, id);
    }

    /** 
     * Map to update a reagent
     * @param newReagent The new reagent params      
     * @return Reagent The updated reagent ressultant
     */
    @PutMapping("/reagent")
    public Reagent replaceOrAddReagent(@RequestBody Reagent reagent) {
        
        return reagentService.modifyOrAddReagent(reagent);
    }

    
    /** 
     * Map to return a pagination of reagents
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @GetMapping("/reagent/page")
    public ResponseEntity<Map<String, Object>> findAllPage(@RequestParam Map<String, Object> params) {
        int totalPages;
        Long totalItems;
        int page = params.get("page") != null ? Integer.valueOf(params.get("page").toString()) : 0;
        int size = params.get("size") != null ? Integer.valueOf(params.get("size").toString()) : 10;
        
        String sortBy = params.get("sortBy") != null ? params.get("sortBy").toString() : "id";
        Direction sortByDirection = params.get("direction") != null ? params.get("direction").toString().equals("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC : Sort.Direction.ASC;

        LOGGER.info("Has received a request to page: " + page + " |size: " + size + " |sortBy: " + sortBy + " |direction: " + sortByDirection);
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by(sortByDirection, sortBy)); 
        
        Page<Reagent> pageReagent = reagentService.getAllPage(pageRequest);

        totalPages = pageReagent.getTotalPages();
        totalItems = pageReagent.getTotalElements();
        Map <String, Object> response = new HashMap<>();
        response.put("data" , pageReagent.getContent());
        response.put("numPages" , totalPages);
        response.put("totalElements" , totalItems);

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
        
    }    

    
    /** 
     * Map to return a pagination of reagents searched by location
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @GetMapping("/reagent/location")
    public ResponseEntity<Map<String, Object>> findAllByLocationId (@RequestParam Map<String, Object> params) {
        Map <String, Object> response = new HashMap<>();

        response = reagentService.reagentsByLocationId(params);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    
    /** 
     * Map to return a pagination of reagents searched by utilization
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @GetMapping("/reagent/utilization")
    public ResponseEntity<Map<String, Object>> findAllByUtilization (@RequestParam Map<String, Object> params) {
        Map <String, Object> response = new HashMap<>();

        response = reagentService.reagentsByUtilization(params);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }    

}
