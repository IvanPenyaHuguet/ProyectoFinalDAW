package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.Supplier;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface SupplierRepository extends CrudRepository <Supplier, Long> {
    
}
