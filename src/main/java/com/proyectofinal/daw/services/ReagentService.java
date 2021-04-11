package com.proyectofinal.daw.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.entities.dto.PageSearchDTO;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.repositories.ReagentRepositoryImpl;
import com.proyectofinal.daw.search.GenericSearchImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ReagentService {
    
    @Autowired
    ReagentRepositoryImpl reagentRepo;  
    
    @Autowired
    GenericSearchImpl<Reagent> genericSearch;

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

    @SuppressWarnings (value="unchecked")
    public Map<String,Object> searchForField (Map<String, Object> params) throws ResponseStatusException{
        Map <String, Object> response = new HashMap<String,Object>();
        int totalPages;
        
        if ( params.get("search") != null && params.get("fields") != null) {
            String searchedText = (String) params.get("search");
            int page = params.get("page") != null ? Integer.valueOf(params.get("page").toString()) : 0;
            int size = params.get("size") != null ? Integer.valueOf(params.get("size").toString()) : 10;
            List<String> fieldsToSearch = (List<String>) params.get("fields");            
            int offset = page * size;

            PageSearchDTO<Reagent> searchedPage = genericSearch.paginatedGenericSearch(Reagent.class, searchedText, fieldsToSearch, offset, size);
            
            totalPages = (int) Math.ceil( searchedPage.getTotalCount() / size );
            response.put("data" , searchedPage.getSearchList());
            response.put("numPages" , totalPages);
            response.put("totalElements" ,  searchedPage.getTotalCount());
        
        } else {
            throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED);
        }
        return response;
    }
}
