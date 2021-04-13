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
    

    @SuppressWarnings ({"unchecked"})
    @Transactional    
    public Map<String,Object> searchReagentElements (Map<String, Object> params) throws ResponseStatusException {
        
        Map <String, Object> response = new HashMap<String,Object>();        
        List<String> inArray = new ArrayList<>();
        String cases = "";
        int totalPages;
        long totalItems;


        Map <String, Long> searchedElements =  (Map <String, Long>) params.get("search");
        int page = params.get("page") != null ? Integer.valueOf(params.get("page").toString()) : 0;
        int size = params.get("size") != null ? Integer.valueOf(params.get("size").toString()) : 10;
        int offset = page * size;

        String sqlResult = "SELECT r.* from reagent r ";
        String sqlCount = "SELECT COUNT(*) OVER () from reagent r ";
        String sql = "INNER JOIN elements_reagents er "+
        "WHERE r.id=er.reagent_id "+
        "GROUP BY r.id, er.element_id " +
        "HAVING er.element_id IN ";
        for (Map.Entry<String, Long> pair : searchedElements.entrySet()) {
            try {
                inArray.add(pair.getKey());
                cases += "WHEN er.element_id = "+ pair.getKey() + " THEN " + pair.getValue() + " ";
            }
            catch (NumberFormatException e) {
                e.printStackTrace();
                System.out.println("Error en el formato de entrada");
            }           
        }
        String[] inArrayString = new String [inArray.size()];
        final String inA = String.join(",", inArray.toArray(inArrayString));
        sql += "(" + inA +") AND COUNT(er.element_id) >= (CASE " + cases;
        sql += "END) "+
            "ORDER BY r.id";
        String sqlLimit = " LIMIT " + offset + ", " + size;
        System.out.println(sql);        
        
        Optional<List<Reagent>> result = execSQL.executeNativeQueryReagent(sqlResult + sql + sqlLimit);
        totalItems = execSQL.executeNativeQueryGetCount(sqlCount + sql + " LIMIT 1");
        totalPages = (int) Math.ceil( totalItems / size );

        if (result.isPresent()) {
            response.put("data", result);
            response.put("numPages" , totalPages);
            response.put("totalElements" , totalItems);
        }
        else {
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);
        }
        return response;
    }

}
