package com.proyectofinal.daw.repositories;


import com.proyectofinal.daw.entities.Reagent;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ReagentBaseRepository<T extends Reagent> extends JpaRepository <T, Long>{    
    
    public T findBySpanishName(String spanishName);
    public T findByInternalReference(String internalReference);
    public T findByCas(String cas);
}

