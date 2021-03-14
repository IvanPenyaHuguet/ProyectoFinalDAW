package com.proyectofinal.daw.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Controller for the views
 */
@Controller
public class ViewController {
    
    
    /** 
     * @return String Returns the index view
     */
    @GetMapping("/")
    public String index() {
		  return "index"; 
	  }
}
