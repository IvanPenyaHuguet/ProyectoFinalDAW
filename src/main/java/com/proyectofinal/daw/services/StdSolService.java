package com.proyectofinal.daw.services;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

import com.proyectofinal.daw.entities.AqueousStandardSolution;
import com.proyectofinal.daw.entities.InorganicReagent;
import com.proyectofinal.daw.entities.OrganicReagent;
import com.proyectofinal.daw.entities.OrganicStandardSolution;
import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.entities.StandardSol;
import com.proyectofinal.daw.entities.dto.PageSearchDTO;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.repositories.AqueousStdSolRepository;
import com.proyectofinal.daw.repositories.OrganicStdSolRepository;
import com.proyectofinal.daw.repositories.ReagentRepositoryImpl;
import com.proyectofinal.daw.repositories.StandardSolBaseRepository;
import com.proyectofinal.daw.repositories.StandardSolImplRepository;
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
public class StdSolService {
    private static final Logger LOGGER = LoggerFactory.getLogger(StdSolService.class);
    
    @Autowired
    AqueousStdSolRepository aqueousRepo;
    
    @Autowired
    OrganicStdSolRepository organicRepo;

    @Autowired
    StandardSolImplRepository solRepo;
    
    @Autowired
    GenericSearchImpl<Reagent> genericSearch;
    
    @Autowired
    SessionFactory factory;

    @Autowired
    ReagentDAO reagentDAO;

    @Autowired
    UserRepository userRepo;

    @Autowired
    ReagentRepositoryImpl reagentRepo;  
    
    private <T extends StandardSol> StandardSolBaseRepository getRepo (Class<T> clazz){
        if (clazz.isInstance(AqueousStandardSolution.class))
            return aqueousRepo;
        if (clazz.isInstance(OrganicStandardSolution.class))
            return organicRepo;
        return aqueousRepo;
    }

    @SuppressWarnings(value="unchecked")
    public <T extends StandardSol> List<StandardSol> findAll(Class<T> clazz) {
        return (List<StandardSol>) getRepo(clazz).findAll();
    }

    public <T extends StandardSol> Optional<StandardSol> findById(Long id, Class<T> clazz) {       
        return getRepo(clazz).findById(id);        
    } 

    public <T extends StandardSol> boolean deleteById(Long id, Class<T> clazz) {
        boolean deleted = false;        
        if (getRepo(clazz).existsById(id)) {
            getRepo(clazz).deleteById(id);
            deleted = true;
        } 
        return deleted;
    }

    private StandardSol modifyOrAddStandardSol (StandardSol sol, StandardSol newSol) {

        sol.setInternalReference(newSol.getInternalReference());
        sol.setName(newSol.getName());
        sol.setElements(newSol.getElements());
        sol.setSuppliers(newSol.getSuppliers());
        sol.setConcentration(newSol.getConcentration());
        if (Objects.isNull(sol.getEntryDate())) 
            sol.setEntryDate(newSol.getEntryDate());

        return sol;
    }

    /**
     * Generic method to add or modify a reagent
     * @param reagentToChange Reagent to add or modify
     * @return Reagent modified or added
     */
    public StandardSol modifyOrAddAqueousSolution (AqueousStandardSolution newSol) {
        try {
            AqueousStandardSolution sol = (AqueousStandardSolution) aqueousRepo.findById(newSol.getId())
            .orElse(new AqueousStandardSolution());
            
            sol = (AqueousStandardSolution) modifyOrAddStandardSol(sol, newSol);
            sol.setExpiryDate(newSol.getExpiryDate());
            sol.setMolecularWeight(newSol.getMolecularWeight());           

            LOGGER.info("Has received a request to save a reagent");
            return aqueousRepo.save(sol);   
        } 
        catch (Exception e) {
            LOGGER.warn("Has received a request to save a regent and something bad happened. ");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Data to save is invalid.");
        }  
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

    
    
}
