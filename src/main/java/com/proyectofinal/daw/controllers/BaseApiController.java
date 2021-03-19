package com.proyectofinal.daw.controllers;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Parent interface for all the api controllers
 */
@PreAuthorize("authenticated")
@RequestMapping("/api")
public interface BaseApiController {
    
}
