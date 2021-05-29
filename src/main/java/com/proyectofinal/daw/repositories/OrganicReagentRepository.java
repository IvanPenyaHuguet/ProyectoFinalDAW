package com.proyectofinal.daw.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.proyectofinal.daw.entities.OrganicReagent;


@Repository
public interface OrganicReagentRepository extends ReagentBaseRepository <OrganicReagent> {    

    /**
     * Creates a new method to search for all reagents on given location 
     * @param id The id of the location to search
     * @param pageable Param to introduce pagination and sorting
     * @return Page<OrganicReagent> A list of reagent subclasses
     */
    @Query("SELECT r FROM Reagent r JOIN r.location l WHERE l.id=?1")
    Page<OrganicReagent> findByLocationId(Long id, Pageable pageable);
}
    
