package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    
    User findByUsername(String username);
}
