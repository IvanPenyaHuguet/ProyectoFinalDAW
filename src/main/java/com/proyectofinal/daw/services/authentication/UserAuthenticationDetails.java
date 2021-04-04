package com.proyectofinal.daw.services.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import com.proyectofinal.daw.entities.Role;
import com.proyectofinal.daw.entities.User;
import com.proyectofinal.daw.repositories.UserRepository;

/**
 * Component in charge of the process of authorizating the users to the web
 */

@Component
public class UserAuthenticationDetails implements UserDetailsService{

    @Autowired
    private UserRepository userRepository;    

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username));        
        List<GrantedAuthority> rolesList = new ArrayList<>();
        List<Role> roles = user.getRole();
        for ( Role rol: roles) {
            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(rol.getAuthority());
            rolesList.add(grantedAuthority);
        }     
        UserDetails securityUser = (UserDetails) new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPass(), rolesList);        
        return securityUser;
    }

    
}
