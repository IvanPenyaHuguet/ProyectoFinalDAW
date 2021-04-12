package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.Reagent;


public interface ReagentRepositoryImpl extends ReagentBaseRepository <Reagent> {

    /**
     * Overrides the methos save for saving any type of reagent
     */
    <S extends Reagent> S save(S entity);

    
}
