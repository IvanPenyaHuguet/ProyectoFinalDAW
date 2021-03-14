package com.proyectofinal.daw.services;

import com.proyectofinal.daw.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class UserService {
    
    @Autowired
    UserRepository userRepo;
}
