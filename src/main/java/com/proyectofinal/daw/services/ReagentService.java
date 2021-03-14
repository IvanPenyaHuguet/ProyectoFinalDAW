package com.proyectofinal.daw.services;

import java.util.List;
import java.util.Optional;

import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.repositories.ReagentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReagentService {
    
    @Autowired
    ReagentRepository reagentRepo;

    public List<Reagent> findAll() {
        return (List<Reagent>) reagentRepo.findAll();
    }

    public boolean deleteById(Long id) {
        boolean deleted = false;        
        if (reagentRepo.existsById(id)) {
            reagentRepo.deleteById(id);
            deleted = true;
        }  
           
        return deleted;
    }

    public Reagent findById(Long id) {        
        Reagent foundReagent = null;
        Optional<Reagent> optionalReagent = reagentRepo.findById(id);
        if (optionalReagent.isPresent()) {
            foundReagent = optionalReagent.get();
        }
        return foundReagent;
    }

    public boolean save (Reagent newReagent) {
        boolean saved;
        try {
            reagentRepo.save(newReagent);
            saved = true;
        }
        catch (IllegalArgumentException e) {
            saved = false;
        }

        return saved;
    }
}
