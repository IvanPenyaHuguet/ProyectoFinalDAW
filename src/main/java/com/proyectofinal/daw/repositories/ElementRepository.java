package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.Element;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ElementRepository extends JpaRepository <Element, Long>{
    
}