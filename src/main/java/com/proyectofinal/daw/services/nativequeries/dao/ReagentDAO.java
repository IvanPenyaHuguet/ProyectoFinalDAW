package com.proyectofinal.daw.services.nativequeries.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.services.nativequeries.ExecuteQueries;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ReagentDAO {

    
    @Autowired
    ExecuteQueries execSQL;    
    

    /**
     * Reference SQL
     * SELECT r.* from reagent r INNER JOIN elements_reagents er WHERE r.id=er.reagent_id 
     * GROUP BY r.id, er.element_id HAVING er.element_id IN (1) AND COUNT(er.element_id) >= 
     * (CASE WHEN er.element_id = 1 THEN 1 END) AND r.id NOT IN 
     * (SELECT e.reagent_id FROM elements_reagents e WHERE e.element_id IN (16,27)) 
     * ORDER BY r.id
     * @param params
     * @return
     * @throws ResponseStatusException
     */
    @SuppressWarnings ({"unchecked"})
    @Transactional    
    public Map<String,Object> searchReagentElements (Map<String, Object> params) throws ResponseStatusException {
        
        Map <String, Object> response = new HashMap<String,Object>();        
        List<String> inArray = new ArrayList<>();
        List<String> inNotArray = new ArrayList<>();
        String cases = "";
        int totalPages;       


        Map <String, Integer> searchedElements =  (Map <String, Integer>) params.get("search");
        int page = params.get("page") != null ? Integer.valueOf(params.get("page").toString()) : 0;
        int size = params.get("size") != null ? Integer.valueOf(params.get("size").toString()) : 10;
        int offset = page * size;

        
        boolean notHaving = false;
        boolean having = false;

        String sqlResult = "SELECT r.* from reagent r ";
        String sqlCount = "SELECT COUNT(*) OVER () from reagent r ";
        String sql = "INNER JOIN elements_reagents er "+
        "WHERE r.id=er.reagent_id "+
        "GROUP BY r.id, er.element_id ";
        for (Map.Entry<String, Integer> pair : searchedElements.entrySet()) {
            try {
                if ( pair.getValue() > 0){
                    having = true;
                    inArray.add(pair.getKey());
                    cases += "WHEN er.element_id = "+ pair.getKey() + " THEN " + pair.getValue() + " ";
                }
                if ( pair.getValue() < 0) {
                    notHaving = true;
                    inNotArray.add(pair.getKey());
                }                
            }
            catch (NumberFormatException e) {                
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
            }           
        }
        String[] inArrayString = new String [inArray.size()];
        final String inA = String.join(",", inArray.toArray(inArrayString));
        final String sqlIn = "HAVING er.element_id IN (" + inA +") AND COUNT(er.element_id) >= (CASE " + cases + "END) ";
        sql+= having == true ? sqlIn : "HAVING ";
        

        String[] inNotArrayString = new String [inNotArray.size()];
        final String inNotA = String.join(",", inNotArray.toArray(inNotArrayString));
        String notHavingSql = having==true ? " AND " : "";
        notHavingSql += "r.id NOT IN (SELECT e.reagent_id FROM elements_reagents e WHERE e.element_id IN (";
        sql += notHaving == true ? notHavingSql + inNotA +")) " : "";

        sql += "ORDER BY r.id";
        String sqlLimit = " LIMIT " + offset + ", " + size;
               
        
        Optional<List<Reagent>> result = execSQL.executeNativeQueryReagent(sqlResult + sql + sqlLimit);
        Optional<Long> totalItems = execSQL.executeNativeQueryGetCount(sqlCount + sql + " LIMIT 1");     

        if (result.isPresent() && totalItems.isPresent()) {
            totalPages = (int) Math.ceil( totalItems.get() / size );
            response.put("data", result.get());
            response.put("numPages" , totalPages);
            response.put("totalElements" , totalItems);
        }
        else {
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);
        }
        return response;
    }

}
