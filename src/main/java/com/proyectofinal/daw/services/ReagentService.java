package com.proyectofinal.daw.services;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

import com.proyectofinal.daw.entities.InorganicReagent;
import com.proyectofinal.daw.entities.OrganicReagent;
import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.entities.dto.PageSearchDTO;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.repositories.ReagentRepositoryImpl;
import com.proyectofinal.daw.repositories.UserRepository;
import com.proyectofinal.daw.search.GenericSearchImpl;
import com.proyectofinal.daw.services.nativequeries.dao.ReagentDAO;
import com.proyectofinal.daw.utils.security.SecurityUtils;

import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ReagentService {
    
    private static final Logger LOGGER = LoggerFactory.getLogger(ReagentService.class);
    
    @Autowired
    ReagentRepositoryImpl reagentRepo;  
    
    @Autowired
    GenericSearchImpl<Reagent> genericSearch;
    
    @Autowired
    SessionFactory factory;

    @Autowired
    ReagentDAO reagentDAO;

    @Autowired
    UserRepository userRepo;

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
            reagent.setName(reagentToChange.getName());
            reagent.setEnglishName(reagentToChange.getEnglishName());            
            return reagentRepo.save(reagent);
        })
        .orElseThrow(() -> new ReagentNotFoundException(id));        
    }

    public Page <? extends Reagent> getAllPage(Pageable pageable) {
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
  
    public Map<String,Object> searchReagentElements (Map<String, Object> params) throws ResponseStatusException{

        Map <String, Object> response = new HashMap<String,Object>();
        if ( params.get("search") != null) {
            response = reagentDAO.searchReagentElements(params);            
        }
        else {
            throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED);
        }
        return response;
    }

    public Map <String, Object> reagentsByLocationId (Map<String, Object> params) throws ResponseStatusException {

        Map <String, Object> response = new HashMap<String,Object>();
        int totalPages;
        Long totalItems;

        if ( Objects.isNull(params.get("location")) ) {
            throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED);
        }
        else {
            int page = params.get("page") != null ? Integer.valueOf(params.get("page").toString()) : 0;
            int size = params.get("size") != null ? Integer.valueOf(params.get("size").toString()) : 10;
            Long location = Long.parseLong(params.get("location").toString());
            String sortBy = Objects.nonNull(params.get("sortBy")) ? params.get("sortBy").toString() : "id";
            Direction sortByDirection = params.get("direction") != null ? params.get("direction").toString().equals("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC : Sort.Direction.ASC;

            LOGGER.info("Has received a request to page: " + page + " |size: " + size + " |sortBy: " + sortBy + " |direction: " + sortByDirection + " |location: " + location);
            PageRequest pageRequest = PageRequest.of(page, size, Sort.by(sortByDirection, sortBy));

            Page<Reagent> pageReagent = reagentRepo.findByLocationId(location, pageRequest);

            totalPages = pageReagent.getTotalPages();
            totalItems = pageReagent.getTotalElements();
            
            response.put("data" , pageReagent.getContent());
            response.put("numPages" , totalPages);
            response.put("totalElements" , totalItems);

            return response;
        }
    }

    public Map <String, Object> reagentsByUtilization (Map<String, Object> params) throws ResponseStatusException {

        Map <String, Object> response = new HashMap<String,Object>();
        int totalPages;
        Long totalItems;

        if ( Objects.isNull(params.get("utilization")) ) {
            throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED);
        }
        else {
            int page = params.get("page") != null ? Integer.valueOf(params.get("page").toString()) : 0;
            int size = params.get("size") != null ? Integer.valueOf(params.get("size").toString()) : 10;
            String utilization = params.get("utilization").toString();
            String sortBy = Objects.nonNull(params.get("sortBy")) ? params.get("sortBy").toString() : "id";
            Direction sortByDirection = params.get("direction") != null ? params.get("direction").toString().equals("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC : Sort.Direction.ASC;

            LOGGER.info("Has received a request to page: " + page + " |size: " + size + " |sortBy: " + sortBy + " |direction: " + sortByDirection + " |utilization: " + utilization);
            PageRequest pageRequest = PageRequest.of(page, size, Sort.by(sortByDirection, sortBy));

            Page<Reagent> pageReagent = reagentRepo.findByUtilization(utilization, pageRequest);

            totalPages = pageReagent.getTotalPages();
            totalItems = pageReagent.getTotalElements();
            
            response.put("data" , pageReagent.getContent());
            response.put("numPages" , totalPages);
            response.put("totalElements" , totalItems);

            return response;
        }
    }

    public List<String> findAllUtilization() {        

        return reagentRepo.findAllUtilization();
    }

    /**
     * Generic method to add or modify a reagent
     * @param reagentToChange Reagent to add or modify
     * @return Reagent modified or added
     */
    public Reagent modifyOrAddReagent (Reagent reagentToChange) {
        try {
            Reagent reagent = reagentRepo.findById(reagentToChange.getId())
            .orElse(reagentToChange.getReagentType().equals(Reagent.INORGANIC_REAGENT) ? new InorganicReagent() : new OrganicReagent());
            
            reagent.setName(reagentToChange.getName());
            reagent.setEnglishName(reagentToChange.getEnglishName());   
            reagent.setInternalReference(reagentToChange.getInternalReference());
            reagent.setQuantity(reagentToChange.getQuantity());
            reagent.setFormula(reagentToChange.getFormula());
            if (! Objects.isNull(reagentToChange.getCommentary())) 
                reagent.setCommentary(reagentToChange.getCommentary());
            reagent.setSuppliers(reagentToChange.getSuppliers());
            reagent.setMolecularWeight(reagentToChange.getMolecularWeight());
            if (Objects.isNull(reagent.getEntryDate())) 
                reagent.setEntryDate(new Date());
            reagent.setCas(reagentToChange.getCas());
            reagent.setElements(reagentToChange.getElements());        
            if (Objects.isNull(reagent.getUserBuyer())) 
                reagent.setUserBuyer(userRepo.findByUsername(SecurityUtils.getCurrentUser().getUsername()).get());
            reagent.setLocation(reagentToChange.getLocation());
            if (reagent instanceof InorganicReagent) {
                ((InorganicReagent) reagent).setUtilization(((InorganicReagent) reagentToChange).getUtilization());
            }
            if (reagent instanceof OrganicReagent) {
                ((OrganicReagent) reagent).setSecondaryIntReference(((OrganicReagent) reagentToChange).getSecondaryIntReference());
            }
            

            LOGGER.info("Has received a request to save a reagent");

            return reagentRepo.save(reagent);   
        } 
        catch (Exception e) {
            LOGGER.warn("Has received a request to save a regent and something bad happened. ");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Data to save is invalid.");
        }  
    }
}
