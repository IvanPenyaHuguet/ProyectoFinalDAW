package com.proyectofinal.daw.controllers;

import java.util.Map;

import com.proyectofinal.daw.entities.User;
import com.proyectofinal.daw.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
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
    public ResponseEntity<User> signUp(@RequestBody User user) {        
        return userService.save(user);
    }

    /**
     * Api for register new users
     * @param user User to register in the database
     */
    @GetMapping("/user")
    public ResponseEntity<Map<String, Object>> getAll() {        
        return userService.getAll();
    }

    
}
