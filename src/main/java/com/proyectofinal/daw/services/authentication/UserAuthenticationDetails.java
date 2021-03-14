package com.proyectofinal.daw.services.authentication;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;


import java.util.Collections;

import com.proyectofinal.daw.entities.User;
import com.proyectofinal.daw.repositories.UserRepository;
/**
 * dzone
 */
@Component
public class UserAuthenticationDetails implements UserDetailsService{

    private UserRepository userRepository;

    public UserAuthenticationDetails(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        UserBuilder  builder=null;
        if(user == null){
            throw new UsernameNotFoundException(username);
        }
        else {
            builder=org.springframework.security.core.userdetails.User.withUsername(user.getUsername());
            builder.password(new BCryptPasswordEncoder().encode(user.getPass()));
            builder.roles(user.getRole().getAuthority());
        }
        return builder.build();
    }
}
