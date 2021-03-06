package com.proyectofinal.daw.controllers;

import java.util.Map;

import com.proyectofinal.daw.entities.AqueousStandardSolution;
import com.proyectofinal.daw.services.InorganicReagentService;
import com.proyectofinal.daw.services.OrganicReagentService;
import com.proyectofinal.daw.services.ReagentService;
import com.proyectofinal.daw.services.StdSolService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


/**
 * Api controller to do searchs with params
 */
@RestController
public class SearchApiController implements BaseApiController{


    @Autowired
    ReagentService reagentService;  

    @Autowired
    OrganicReagentService orgReagentService; 

    @Autowired
    InorganicReagentService inorgReagentService; 

    @Autowired
    StdSolService stdSolService;

    
    /** 
     * Map to search reagents by text with hibernate search
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy, text)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @PostMapping("/search/reagent")
    public ResponseEntity<Map<String, Object>> searchReagentText (@RequestBody Map<String, Object> params) {

        Map<String, Object> response = reagentService.searchForField(params);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    
    /** 
     * Map to return a pagination of reagents searched by elements with nativequeries
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy, elements)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @PostMapping("/search/elements/reagent")    
    public ResponseEntity<Map<String, Object>> searchReagentElements (@RequestBody Map<String, Object> params ){
        
        Map<String, Object> response = reagentService.searchReagentElements(params);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    /** 
     * Map to search reagents by text with hibernate search
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy, text)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @PostMapping("/search/organic/reagent")
    public ResponseEntity<Map<String, Object>> searchOrgReagentText (@RequestBody Map<String, Object> params) {

        Map<String, Object> response = orgReagentService.searchForField(params);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    
    /** 
     * Map to return a pagination of reagents searched by elements with nativequeries
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy, elements)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @PostMapping("/search/elements/organic/reagent")    
    public ResponseEntity<Map<String, Object>> searchOrgReagentElements (@RequestBody Map<String, Object> params ){
        
        Map<String, Object> response = orgReagentService.searchReagentElements(params);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }


    /** 
     * Map to search reagents by text with hibernate search
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy, text)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @PostMapping("/search/inorganic/reagent")
    public ResponseEntity<Map<String, Object>> searchInorgReagentText (@RequestBody Map<String, Object> params) {

        Map<String, Object> response = inorgReagentService.searchForField(params);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    
    /** 
     * Map to return a pagination of reagents searched by elements with nativequeries
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy, elements)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @PostMapping("/search/elements/inorganic/reagent")    
    public ResponseEntity<Map<String, Object>> searchInorgReagentElements (@RequestBody Map<String, Object> params ){
        
        Map<String, Object> response = orgReagentService.searchReagentElements(params);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    /** 
     * Map to search reagents by text with hibernate search
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy, text)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @PostMapping("/search/standard/aqueous")
    public ResponseEntity<Map<String, Object>> searchAqStdSolText (@RequestBody Map<String, Object> params) {

        Map<String, Object> response = stdSolService.searchForField(params, AqueousStandardSolution.class);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    
    /** 
     * Map to return a pagination of reagents searched by elements with nativequeries
     * @param Map<String,Object>params A json body of params to paginate (size, page, direction, sortBy, elements)     
     * @return ResponseEntity<Map<String, Object>> The page as result of the request, with reagents on page, number of pages an total elements for the request without pagination.
     */
    @PostMapping("/search/elements/standard/aqueous")    
    public ResponseEntity<Map<String, Object>> searchAqStdSolElements (@RequestBody Map<String, Object> params ){
        
        Map<String, Object> response = stdSolService.searchReagentElements(params, AqueousStandardSolution.class);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    
}
