package com.proyectofinal.daw.repositories;

import java.util.List;

import com.proyectofinal.daw.entities.Commentary;
import com.proyectofinal.daw.entities.Reagent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentaryRepository extends JpaRepository <Commentary, Long> {
    
    List <Commentary> findByReagent(Reagent reagent);
}
