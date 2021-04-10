package com.proyectofinal.daw.controllers;

import java.util.Map;

import com.proyectofinal.daw.services.ReagentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
public class SearchApiController implements BaseApiController{

    @Autowired
    ReagentService reagentService;  

    @GetMapping("/search/reagent")
    public ResponseEntity<Map<String, Object>> searchReagentText (@RequestBody Map<String, Object> params) {

        Map<String, Object> response = reagentService.searchForField(params);
        
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    
}
