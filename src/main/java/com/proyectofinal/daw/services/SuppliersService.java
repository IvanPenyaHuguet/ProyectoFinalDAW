package com.proyectofinal.daw.services;

import java.util.List;

import com.proyectofinal.daw.entities.Supplier;

import com.proyectofinal.daw.repositories.SupplierRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SuppliersService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SuppliersService.class);
    
    @Autowired
    SupplierRepository supplierRepo;

    public List<Supplier> findAll() {
        return (List<Supplier>) supplierRepo.findAll();
    }
    
}
