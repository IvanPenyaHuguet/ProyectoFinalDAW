package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.StandardSol;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StandardSolBaseRepository <T extends StandardSol> extends JpaRepository <StandardSol, Long>{    
    
    public T findByName(String name);
    public T findByInternalReference(String internalReference);
        
}
