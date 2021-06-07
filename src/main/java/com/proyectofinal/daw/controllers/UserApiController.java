package com.proyectofinal.daw.controllers;

import com.proyectofinal.daw.entities.User;
import com.proyectofinal.daw.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Api controller for manage users
 */
@RestController
@PreAuthorize("hasRole('ROLE_MODIFY_USERS')")
@RequestMapping("/api/auth")
public class UserApiController implements BaseApiController {
    
    @Autowired
    UserService userService;

    /**
     * Api for register new users
     * @param user User to register in the database
     */
    @PutMapping("/user")
    public void signUp(@RequestBody User user) {        
        userService.save(user);
    }

    
}
