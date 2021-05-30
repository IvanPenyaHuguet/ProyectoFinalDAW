package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.StandardSol;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jdbc.repository.query.Query;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StandardSolBaseRepository <T extends StandardSol> extends JpaRepository <StandardSol, Long>{    
    
    public T findByName(String name);
    public T findByInternalReference(String internalReference);
    @Query("SELECT r FROM OrganicStandardSolution r JOIN r.location l WHERE l.id=?1")
    public Page<T> findByLocationId(Long id, Pageable pageable);    
    
        
}
