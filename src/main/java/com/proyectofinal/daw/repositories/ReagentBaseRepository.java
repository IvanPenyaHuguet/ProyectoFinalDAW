package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.Reagent;

import org.springframework.data.repository.CrudRepository;

public interface ReagentBaseRepository<T extends Reagent> extends CrudRepository <T, Long>{
    
    // @Query("select u from #{#entityName} as u where u.email = ?1 ")
    public T findBySpanishName(String spanishName);
}
