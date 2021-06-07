package com.proyectofinal.daw.controllers;

import java.util.ArrayList;
import java.util.List;

import com.proyectofinal.daw.services.authentication.AuthenticationUser;
import com.proyectofinal.daw.services.authentication.JwtAuthenticationResponse;
import com.proyectofinal.daw.services.authentication.JwtUtil;
import com.proyectofinal.daw.services.authentication.UserAuthenticationDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/**
 * Api Controller for the basic website authentication 
 */
@RestController
@RequestMapping("/")
public class UserAuthController {
        
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserAuthenticationDetails UserAuthenticationDetails;

    @Autowired
    private JwtUtil jwtUtil;


    /**
     * Api for login the users returning a JWT
     * @param user User with username and password to verify
     * @return  JWT for the user
     */    
    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationUser user) {
        try {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken( user.getUsername(), user.getPassword()
        ));
        }
        catch (BadCredentialsException e) {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Bad credentials", e);
        }
        final UserDetails userDetails = UserAuthenticationDetails.loadUserByUsername(user.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);
        List<String> roles = new ArrayList<String>();
        for (GrantedAuthority ga :  userDetails.getAuthorities()) {
            roles.add(ga.getAuthority());
        }        
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt, user.getUsername(), roles));
    }
    /**
     * Api for check if a JWT is still valid
     * @param user User with Token to verify
     * @return  Token is valid or not
     */    
    @PostMapping("/validate")
    public ResponseEntity<?> checkValidationToken(@RequestBody JwtAuthenticationResponse user) {
        
        try {
            final UserDetails userDetails = UserAuthenticationDetails.loadUserByUsername(user.getUser());
            final Boolean valid = jwtUtil. validateToken(user.getToken(), userDetails);
            if ( valid == false) {
                throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Token not valid");
            }
        }
        catch (BadCredentialsException e) {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Token not valid", e);
        }       
        return ResponseEntity.ok("Token is valid");
    }
 

}
