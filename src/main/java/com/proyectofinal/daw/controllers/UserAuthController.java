package com.proyectofinal.daw.controllers;

import com.proyectofinal.daw.entities.User;
import com.proyectofinal.daw.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * dzone
 */
@RestController
@RequestMapping("/")
public class UserAuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    

    @PostMapping("/signup")
    public void signUp(@RequestBody User user) {
        user.setPass(bCryptPasswordEncoder.encode(user.getPass()));
        userRepository.save(user);
    }
}
