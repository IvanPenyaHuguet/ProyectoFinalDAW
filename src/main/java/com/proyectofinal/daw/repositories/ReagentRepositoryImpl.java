package com.proyectofinal.daw.repositories;

import java.util.List;

import com.proyectofinal.daw.entities.Reagent;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Generic Repository Implementation to search for reagent subclasses
 */
@Repository
public interface ReagentRepositoryImpl extends ReagentBaseRepository <Reagent> {

    /**
     * Overrides the method save for saving any type of reagent
     */
    <S extends Reagent> S save(S entity);

    /**
     * Creates a new method to search for all reagents on given location 
     * @param id The id of the location to search
     * @param pageable Param to introduce pagination and sorting
     * @return List<S extends Reagent> A list of reagent subclasses
     */
    @Query("SELECT r FROM Reagent r JOIN r.location l WHERE l.id=?1")
    Page<Reagent> findByLocationId(Long id, Pageable pageable);

    /**
     * Creates a new method to search for all reagents on given location 
     * @param utilization The string utilization to search
     * @param pageable Param to introduce pagination and sorting
     * @return List<S extends Reagent> A list of reagent subclasses
     */    
    @Query("SELECT r FROM Reagent r WHERE r.utilization=?1")
    Page<Reagent> findByUtilization(String utilization, Pageable pageable);


    @Query("SELECT DISTINCT r.utilization FROM Reagent r")
    List<String> findAllUtilization();
}
