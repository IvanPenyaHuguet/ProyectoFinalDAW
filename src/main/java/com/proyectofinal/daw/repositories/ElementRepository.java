package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.Element;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ElementRepository extends JpaRepository <Element, Integer>{
    
}