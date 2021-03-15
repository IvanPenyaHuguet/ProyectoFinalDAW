package com.proyectofinal.daw.repositories;

import java.util.Optional;

import com.proyectofinal.daw.entities.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    
    public Optional<User> findByUsername(String username);
}
