package com.proyectofinal.daw.repositories;

import java.util.Optional;

import com.proyectofinal.daw.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    public Optional<User> findByUsername(String username);
}
