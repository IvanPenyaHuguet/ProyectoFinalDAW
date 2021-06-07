package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.Role;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    
    public Role findByDescription(String description);
} 
    

