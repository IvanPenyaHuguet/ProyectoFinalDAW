package com.proyectofinal.daw.services.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import com.proyectofinal.daw.entities.User;
import com.proyectofinal.daw.repositories.UserRepository;
/**
 * dzone
 */
@Component
public class UserAuthenticationDetails implements UserDetailsService{

    @Autowired
    private UserRepository userRepository;    

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username));
        // UserBuilder  builder=null;
        // if(user == null){
        //     throw new UsernameNotFoundException(username);
        // }
        // else {
            // builder=org.springframework.security.core.userdetails.User.withUsername(user.getUsername());
            // builder.password(new BCryptPasswordEncoder().encode(user.getPass()));
            // builder.roles(user.getRole().getAuthority());            
        // }
        // return builder.build();
        List rolesList = new ArrayList();
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(user.getRole().getAuthority());
        rolesList.add(grantedAuthority);
        UserDetails securityUser = (UserDetails) new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPass(), rolesList);
        return securityUser;
    }
}
