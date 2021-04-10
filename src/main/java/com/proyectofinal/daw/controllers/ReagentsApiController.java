package com.proyectofinal.daw.controllers;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.services.ReagentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
 * Main controller for the REST api, only for reagents models
 */
@RestController
public class ReagentsApiController implements BaseApiController{   
    
    @Autowired
    ReagentService reagentService;    
    
  
    @GetMapping("/reagent")              
    public List<Reagent> getAll() {      
        return reagentService.findAll();
    }

    @PreAuthorize("hasRole('ROLE_EDIT_ALL')")
    @GetMapping("/reagent/{id}")           
    public Reagent getById(@PathVariable Long id) {      
        return reagentService.findById(id)
            .orElseThrow(() -> new ReagentNotFoundException(id));
    }
       
    @DeleteMapping("/reagent/{id}") 
    @PreAuthorize("hasRole('ROLE_EDIT_ALL')")           
    public boolean deleteById(@PathVariable Long id) {      
        return reagentService.deleteById(id);
    }

    @PostMapping("/reagent")
    public boolean add (@RequestBody Reagent newReagent) {
        return reagentService.save(newReagent);
    }    

    @PutMapping("/reagent/{id}")
    public Reagent replaceReagent(@RequestBody Reagent newReagent, @PathVariable Long id) {
        
        return reagentService.modifyReagent(newReagent, id);
    }

    @GetMapping("/reagent/page")
    public ResponseEntity<Map<String, Object>> findAllPage(@RequestParam Map<String, Object> params) {
        int totalPages;
        Long totalItems;
        int page = params.get("page") != null ? Integer.valueOf(params.get("page").toString()) : 0;
        int size = params.get("size") != null ? Integer.valueOf(params.get("size").toString()) : 10;


        PageRequest pageRequest = PageRequest.of(page, size);
        Page<Reagent> pageReagent = reagentService.getAllPage(pageRequest);

        totalPages = pageReagent.getTotalPages();
        totalItems = pageReagent.getTotalElements();
        Map <String, Object> response = new HashMap<>();
        response.put("data" , pageReagent.getContent());
        response.put("numPages" , totalPages);
        response.put("totalElements" , totalItems);

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
        
    }    
}
