package com.proyectofinal.daw.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.Tuple;
import javax.transaction.Transactional;

import com.proyectofinal.daw.entities.InorganicReagent;
import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.entities.dto.PageSearchDTO;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.repositories.ReagentRepositoryImpl;
import com.proyectofinal.daw.search.GenericSearchImpl;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.NativeQuery;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
    
    @Autowired
    SessionFactory factory;

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

    @SuppressWarnings (value="unchecked")
    public Map<String,Object> searchReagentElements (Map<String, Object> params) throws ResponseStatusException{
        Map <String, Object> response = new HashMap<String,Object>();
        int totalPages;
        long totalItems;

        if ( params.get("search") != null) {
            Map <Integer, Long> searchedElements =  (Map <Integer, Long>) params.get("search");
            int page = params.get("page") != null ? Integer.valueOf(params.get("page").toString()) : 0;
            int size = params.get("size") != null ? Integer.valueOf(params.get("size").toString()) : 10;
            int offset = page * size;


            // PageSearchDTO<Reagent> searchedPage = genericSearch.searchReagentElements(Reagent.class, searchedElements, offset, size);

            // totalPages = (int) Math.ceil( searchedPage.getTotalCount() / size );
            // response.put("data" , searchedPage.getSearchList());
            // response.put("numPages" , totalPages);
            // response.put("totalElements" ,  searchedPage.getTotalCount());

            PageRequest pageRequest = PageRequest.of(page, size);
            System.out.println(searchedElements);
            //Page<Reagent> pageReagent = reagentRepo.findByElementsGreaterThan(1, 1, pageRequest);
            Page<Reagent> pageReagent = reagentRepo.findByElementsGreaterThan( Arrays.asList(1,16), 2, pageRequest);

            totalPages = pageReagent.getTotalPages();
            totalItems = pageReagent.getTotalElements();            
            response.put("data" , pageReagent.getContent());
            response.put("numPages" , totalPages);
            response.put("totalElements" , totalItems);
        }
        else {
            throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED);
        }
        return response;
    }

    // setResultTransformer and addScalar deprecated, not replacement until hibernate 6.0, now 5.4 13/04
    @SuppressWarnings ({"unchecked", "deprecation" })
    @Transactional
    public Map<String,Object> searchReagentElements2 (Map<String, Object> params) throws ResponseStatusException{
        Map <String, Object> response = new HashMap<String,Object>();
        int totalPages;
        long totalItems;

        if ( params.get("search") != null) {
            Map <Integer, Long> searchedElements =  (Map <Integer, Long>) params.get("search");
            int page = params.get("page") != null ? Integer.valueOf(params.get("page").toString()) : 0;
            int size = params.get("size") != null ? Integer.valueOf(params.get("size").toString()) : 10;
            int offset = page * size;
            List<Integer> inArray = new ArrayList<>();
            String cases = "";
            

            Session sess = factory.openSession();
            Transaction tx = null;
            try {
                tx = sess.beginTransaction();
                String sql = "SELECT r.* from reagent r "+
                    "INNER JOIN elements_reagents er "+
                    "WHERE r.id=er.reagent_id "+
                    "GROUP BY r.id, er.element_id" +
                    "HAVING er.element_id IN ";
                    //" WHEN er.element_id = 1 THEN 6 ";
                
                for (Map.Entry<Integer, Long> pair : searchedElements.entrySet()) {
                    inArray.add(pair.getKey());
                    cases += "WHEN r.element_id = "+ pair.getKey() + " THEN " + pair.getValue() + " ";
                }
                final String inA = String.join(",", inArray.toArray(String[]::new));
                sql += "(" + inA +") AND COUNT(er.element_id) >= (CASE " + cases;
                sql += "END)"+
                    "ORDER BY r.id";
                
                List<Tuple> rows = sess.createNativeQuery(sql).getResultList();
                List<Object> resultWithAliasedBean = sess.createNativeQuery(sql).setResultTransformer(Transformers.aliasToBean(Reagent.class)).list();
                Reagent reg = (Reagent) resultWithAliasedBean.get(0);
                
                for ( Tuple row: rows) {
                    Reagent reag = new InorganicReagent();
                }
                tx.commit();
            }
            catch (Exception e) {
                if (tx!=null) tx.rollback();
                throw e;
            }
            finally {
                sess.close();
            }
        }
        else {
            throw new ResponseStatusException(HttpStatus.PRECONDITION_FAILED);
        }
        return response;
    }
}
