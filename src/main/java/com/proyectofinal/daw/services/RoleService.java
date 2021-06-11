package com.proyectofinal.daw.services;

import java.util.List;

import com.proyectofinal.daw.entities.Role;
import com.proyectofinal.daw.repositories.RoleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 * Service for controlling all roles logic
 */
@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepo;

    /**
     * Method to return all roles in database
     * @return List<Role> All roles of Database
     */
    public List<Role> getAll() {
        return (List<Role>) roleRepo.findAll();
    }
    
}
