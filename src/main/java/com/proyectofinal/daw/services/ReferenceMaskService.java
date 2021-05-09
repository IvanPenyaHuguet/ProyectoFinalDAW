package com.proyectofinal.daw.services;

import java.util.List;

import com.proyectofinal.daw.entities.ReferenceMask;
import com.proyectofinal.daw.repositories.ReferenceMaskRepository;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReferenceMaskService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ReferenceMaskService.class);
    
    @Autowired
    ReferenceMaskRepository refMaskRepo;

    public List<ReferenceMask> findAll() {
        return (List<ReferenceMask>) refMaskRepo.findAll();
    }
    
}
