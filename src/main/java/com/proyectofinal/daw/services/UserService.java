package com.proyectofinal.daw.services;

import java.util.ArrayList;
import java.util.List;

import com.proyectofinal.daw.entities.Role;
import com.proyectofinal.daw.entities.User;
import com.proyectofinal.daw.repositories.RoleRepository;
import com.proyectofinal.daw.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepo;

    @Autowired
    RoleRepository roleRepo;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public boolean save (User newUser) {
        boolean saved;

        if (! userRepo.findByUsername(newUser.getUsername()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED);
        }
        try {
            newUser.setPass(bCryptPasswordEncoder.encode(newUser.getPass()));
            List<Role> roles = new ArrayList<>();
            roles.add(roleRepo.findByDescription("ROLE_ONLY_GUEST"));
            newUser.setRole(roles);
            userRepo.save(newUser);
            saved = true;
        }
        catch (IllegalArgumentException e) {
            saved = false;
        }
        return saved;
    }
}
