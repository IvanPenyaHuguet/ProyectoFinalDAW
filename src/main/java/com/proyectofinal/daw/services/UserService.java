package com.proyectofinal.daw.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.proyectofinal.daw.entities.Role;
import com.proyectofinal.daw.entities.User;
import com.proyectofinal.daw.repositories.RoleRepository;
import com.proyectofinal.daw.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    public ResponseEntity<User> save (User newUser) {
        
        try {
            Optional<User> userInDB = userRepo.findById(newUser.getId());
            if ( userInDB.isPresent() ) {                
                if (! newUser.getPass().equals("")) {
                    newUser.setPass(bCryptPasswordEncoder.encode(newUser.getPass()));
                }
                else {
                    newUser.setPass(userInDB.get().getPass());
                }
            }
            else {
                newUser.setPass(bCryptPasswordEncoder.encode(newUser.getPass()));
                List<Role> roles = new ArrayList<>();
                roles.add(roleRepo.findByDescription("ROLE_ONLY_GUEST"));
                newUser.setRole(roles);  
            }
            User userSaved = userRepo.save(newUser);
            userSaved.setPass("");       
            return new ResponseEntity<User>(userSaved, HttpStatus.OK);
        }
        catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED);
        }
        
    }

    public ResponseEntity<Map<String, Object>> getAll () {
        Map <String, Object> response = new HashMap<>();
        List <User> usuarios = userRepo.findAll();
        for (User user : usuarios) {
            user.setPass("");
        }
        response.put("data" , usuarios);
        response.put("numPages" , 1);
        response.put("totalElements" , usuarios.size());

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}
