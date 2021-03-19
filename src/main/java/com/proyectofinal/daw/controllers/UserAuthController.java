package com.proyectofinal.daw.controllers;

import com.proyectofinal.daw.entities.User;
import com.proyectofinal.daw.repositories.UserRepository;
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
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/**
 * Controller for the basic website authentication 
 */
@RestController
@RequestMapping("/")
public class UserAuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserAuthenticationDetails UserAuthenticationDetails;

    @Autowired
    private JwtUtil jwtUtil;

    /**
     * Api for register new users
     * @param user User to register in the database
     */
    @PostMapping("/signup")
    public void signUp(@RequestBody User user) {
        user.setPass(bCryptPasswordEncoder.encode(user.getPass()));
        userRepository.save(user);
    }

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
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }
 

}
