package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.ReferenceMask;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReferenceMaskRepository extends CrudRepository <ReferenceMask, Long>{
    
}
