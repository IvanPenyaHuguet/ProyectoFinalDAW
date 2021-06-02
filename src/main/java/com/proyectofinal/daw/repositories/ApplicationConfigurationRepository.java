package com.proyectofinal.daw.repositories;

import com.proyectofinal.daw.entities.config.ApplicationConfiguration;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationConfigurationRepository extends JpaRepository <ApplicationConfiguration, Long>{
    
}
