package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.InorganicReagent;

import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;


@Repository
public interface InorganicReagentRepository extends ReagentBaseRepository <InorganicReagent> {
    
    /**
     * Creates a new method to search for all reagents on given location 
     * @param id The id of the location to search
     * @param pageable Param to introduce pagination and sorting
     * @return Page<OrganicReagent> A list of reagent subclasses
     */
    @Query("SELECT r FROM Reagent r JOIN r.location l WHERE l.id=?1")
    Page<InorganicReagent> findByLocationId(Long id, Pageable pageable);
}