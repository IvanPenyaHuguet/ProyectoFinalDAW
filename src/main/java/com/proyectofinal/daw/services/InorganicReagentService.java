package com.proyectofinal.daw.services;

import com.proyectofinal.daw.repositories.InorganicReagentRepository;
import com.proyectofinal.daw.entities.dto.PageSearchDTO;
import com.proyectofinal.daw.search.GenericSearchImpl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.proyectofinal.daw.entities.InorganicReagent;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;


@Service
public class InorganicReagentService extends ReagentService{

    private static final Logger LOGGER = LoggerFactory.getLogger(ReagentService.class);
    
    @Autowired
    InorganicReagentRepository reagentRepo;

    @Autowired
    GenericSearchImpl<InorganicReagent> genericSearch;

    @Override
    public Page<InorganicReagent> getAllPage(Pageable pageable) {
        return reagentRepo.findAll(pageable);
    }

    @Override
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

            Page<InorganicReagent> pageReagent = reagentRepo.findByLocationId(location, pageRequest);

            totalPages = pageReagent.getTotalPages();
            totalItems = pageReagent.getTotalElements();
            
            response.put("data" , pageReagent.getContent());
            response.put("numPages" , totalPages);
            response.put("totalElements" , totalItems);

            return response;
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

            PageSearchDTO<InorganicReagent> searchedPage = genericSearch.paginatedGenericSearch(InorganicReagent.class, searchedText, fieldsToSearch, offset, size);
            
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
