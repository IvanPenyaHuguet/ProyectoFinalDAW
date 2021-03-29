package com.proyectofinal.daw.services;

import java.util.List;
import java.util.Optional;

import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.repositories.ReagentRepositoryImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ReagentService {
    
    @Autowired
    ReagentRepositoryImpl reagentRepo;    

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

    public Optional<Reagent> findById(Long id) {       
        return reagentRepo.findById(id);        
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

    public Reagent modifyReagent (Reagent reagentToChange, Long id) {
        
        return reagentRepo.findById(id)
        .map(reagent-> {
            reagent.setSpanishName(reagentToChange.getSpanishName());
            reagent.setEnglishName(reagentToChange.getEnglishName());            
            return reagentRepo.save(reagent);
        })
        .orElseThrow(() -> new ReagentNotFoundException(id));        
    }

    public Page <Reagent> getAllPage(Pageable pageable) {
        return reagentRepo.findAll(pageable);
    }
}
