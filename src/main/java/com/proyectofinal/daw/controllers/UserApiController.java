package com.proyectofinal.daw.controllers;

import com.proyectofinal.daw.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserApiController implements BaseApiController {
    
    @Autowired
    UserRepository userRepo;

    
}
