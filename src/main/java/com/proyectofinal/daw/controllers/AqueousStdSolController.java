package com.proyectofinal.daw.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import com.proyectofinal.daw.entities.AqueousStandardSolution;
import com.proyectofinal.daw.entities.OrganicStandardSolution;
import com.proyectofinal.daw.entities.StandardSol;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.services.StdSolService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


/**
 * Api controller for aqueuous standard controller
 */
@RestController
public class AqueousStdSolController implements BaseApiController{    
    
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

    /** 
     * Map to delete a reagent
     * @param id The id of the reagent
     * @return boolean The result of the delete
     */
    @DeleteMapping("/standard/aqueous/{id}") 
    @PreAuthorize("hasRole('ROLE_EDIT_ALL')")           
    public boolean deleteById(@PathVariable Long id) {      
        return reagentService.deleteById(id, AqueousStandardSolution.class);
    }

    /** 
     * Map to return a pagination of reagents
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @GetMapping("/standard/aqueous/page")
    public ResponseEntity<Map<String, Object>> findAllPage(@RequestParam Map<String, Object> params) {        
        Map <String, Object> response = reagentService.getAllPage(params,AqueousStandardSolution.class);
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);        
    }
    
    /** 
     * Map to update a reagent
     * @param newReagent The new reagent params      
     * @return Reagent The updated reagent ressultant
     */
    @PutMapping("/standard/aqueous")
    public StandardSol replaceOrAddReagent(@RequestBody AqueousStandardSolution reagent) {        
        return reagentService.modifyOrAddAqueousSolution(reagent);
    }

    /** 
     * Map to return a pagination of reagents searched by location
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @GetMapping("/standard/aqueous/location")
    public ResponseEntity<Map<String, Object>> findAllByLocationId (@RequestParam Map<String, Object> params) {
        Map <String, Object> response = new HashMap<>();

        response = reagentService.solutionsByLocationId(params, AqueousStandardSolution.class);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    /** 
     * Map to return a reagent by id
     * @param id The id of the reagent
     * @return Reagent Reagent found by id
     */
    @PreAuthorize("hasRole('ROLE_EDIT_ALL')")
    @GetMapping("/standard/organic/{id}")           
    public StandardSol getByIdOrg(@PathVariable Long id) {      
        return reagentService.findById(id, OrganicStandardSolution.class)
            .orElseThrow(() -> new ReagentNotFoundException(id));
    }

    /** 
     * Map to delete a reagent
     * @param id The id of the reagent
     * @return boolean The result of the delete
     */
    @DeleteMapping("/standard/organic/{id}") 
    @PreAuthorize("hasRole('ROLE_EDIT_ALL')")           
    public boolean deleteByIdOrg(@PathVariable Long id) {      
        return reagentService.deleteById(id, OrganicStandardSolution.class);
    }

    /** 
     * Map to return a pagination of reagents
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @GetMapping("/standard/organic/page")
    public ResponseEntity<Map<String, Object>> findAllPageOrg(@RequestParam Map<String, Object> params) {        
        Map <String, Object> response = reagentService.getAllPage(params, OrganicStandardSolution.class);
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);        
    }
    
    /** 
     * Map to update a reagent
     * @param newReagent The new reagent params      
     * @return Reagent The updated reagent ressultant
     */
    @PutMapping("/standard/organic")
    public StandardSol replaceOrAddReagentOrg(@RequestBody OrganicStandardSolution reagent) {        
        return reagentService.modifyOrAddOrganicSolution(reagent);
    }

    /** 
     * Map to return a pagination of reagents searched by location
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @GetMapping("/standard/organic/location")
    public ResponseEntity<Map<String, Object>> findAllByLocationIdOrg (@RequestParam Map<String, Object> params) {
        Map <String, Object> response = new HashMap<>();

        response = reagentService.solutionsByLocationId(params, OrganicStandardSolution.class);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }



}
