package com.proyectofinal.daw.services.nativequeries.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.proyectofinal.daw.entities.AqueousStandardSolution;
import com.proyectofinal.daw.entities.OrganicStandardSolution;
import com.proyectofinal.daw.entities.StandardSol;
import com.proyectofinal.daw.services.nativequeries.ExecuteQueries;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;


@Service
public class StandardSolDAO {

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
    public <T extends StandardSol> Map<String,Object> searchElements (Map<String, Object> params, Class <T> clazz) throws ResponseStatusException {
        
        Map <String, Object> response = new HashMap<String,Object>();        
        List<String> inArray = new ArrayList<>();
        List<String> inNotArray = new ArrayList<>();        
        int totalPages;       


        Map <String, Integer> searchedElements =  (Map <String, Integer>) params.get("search");
        int page = params.get("page") != null ? Integer.valueOf(params.get("page").toString()) : 0;
        int size = params.get("size") != null ? Integer.valueOf(params.get("size").toString()) : 10;
        int offset = page * size;

        
        boolean notHaving = false;
        boolean having = false;
        String tbl = "";
        String sqlResult = "SELECT DISTINCT r.* from ";
        String sqlCount = "SELECT COUNT(*) OVER () from ";

        if (clazz.equals(AqueousStandardSolution.class)) {
            tbl = "aqueous_standard_solution";            
        }
        if (clazz.equals(OrganicStandardSolution.class)) {
            tbl = "organic_standard_solution";            
        }       
        
        String sql = tbl +  " r INNER JOIN element_standard_sol er "+
        "WHERE r.id=er.standard_id "+
        "GROUP BY r.id, er.element_id ";
        for (Map.Entry<String, Integer> pair : searchedElements.entrySet()) {
            try {
                if ( pair.getValue() > 0){
                    having = true;
                    inArray.add(pair.getKey());                    
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
        final String sqlIn = "HAVING er.element_id IN (" + inA + ") ";
        sql+= having == true ? sqlIn : "HAVING ";
        

        String[] inNotArrayString = new String [inNotArray.size()];
        final String inNotA = String.join(",", inNotArray.toArray(inNotArrayString));
        String notHavingSql = having==true ? " AND " : "";
        notHavingSql += "r.id NOT IN (SELECT e."+ tbl +"_id FROM elements_reagents e WHERE e.element_id IN (";
        sql += notHaving == true ? notHavingSql + inNotA +")) " : "";

        sql += "ORDER BY r.id";
        String sqlLimit = " LIMIT " + offset + ", " + size;
               
        String distinctSolved = "(SELECT DISTINCT r.id FROM ";
        Optional<List<T>> result = execSQL.executeNativeQueryGenericCompound(sqlResult + sql + sqlLimit, clazz);
        Optional<Long> totalItems = execSQL.executeNativeQueryGetCount(sqlCount + distinctSolved + sql + ") AS subquery LIMIT 1");     

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
