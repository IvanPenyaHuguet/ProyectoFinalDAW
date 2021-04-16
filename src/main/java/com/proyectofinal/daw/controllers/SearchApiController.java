package com.proyectofinal.daw.controllers;

import java.util.Map;

import com.proyectofinal.daw.services.ReagentService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
public class SearchApiController implements BaseApiController{

    private static final Logger LOGGER = LoggerFactory.getLogger(SearchApiController.class);

    @Autowired
    ReagentService reagentService;  

    @PostMapping("/search/reagent")
    public ResponseEntity<Map<String, Object>> searchReagentText (@RequestBody Map<String, Object> params) {

        Map<String, Object> response = reagentService.searchForField(params);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @PostMapping("/search/elements/reagent")    
    public ResponseEntity<Map<String, Object>> searchReagentElements (@RequestBody Map<String, Object> params ){
        
        Map<String, Object> response = reagentService.searchReagentElements(params);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    
}
