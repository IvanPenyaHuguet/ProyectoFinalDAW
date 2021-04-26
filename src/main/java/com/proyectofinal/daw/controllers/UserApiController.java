package com.proyectofinal.daw.controllers;

import com.proyectofinal.daw.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RestController;

/**
 * Api controller for manage users
 */
@RestController
@PreAuthorize("hasRole('ROLE_EDIT_ALL')")
public class UserApiController implements BaseApiController {
    
    @Autowired
    UserRepository userRepo;

    
}
