package com.proyectofinal.daw.repositories;

import java.util.List;

import com.proyectofinal.daw.entities.Reagent;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface ReagentBaseRepository<T extends Reagent> extends JpaRepository <T, Long>{
    
    // @Query("select u from #{#entityName} as u where u.email = ?1 ")
    public T findBySpanishName(String spanishName);
    public T findByInternalReference(String internalReference);
    public T findByCas(String cas);

    //@Query ("select r.id, r.formula, r.spanish_name, er.element_id from reagent r inner join elements_reagents er WHERE r.id=er.reagent_id GROUP BY er.element_id ORDER BY r.id")
    // select r.id, r.formula, r.spanish_name, er.element_id, COUNT(er.element_id) AS 'Total Element' from reagent r inner join elements_reagents er WHERE r.id=er.reagent_id GROUP BY r.id, er.element_id ORDER BY r.id
    
    //select r.id, r.formula, r.spanish_name, er.element_id, COUNT(er.element_id) AS 'Total Element' from reagent r inner join elements_reagents er WHERE r.id=er.reagent_id GROUP BY r.id, er.element_id HAVING er.element_id=1 AND COUNT(er.element_id) > 2 ORDER BY r.id
    //@Query ("SELECT r from Reagent r INNER JOIN Element e GROUP BY r.id, e.atomicNumber HAVING e.=?1 AND COUNT(r.id)>?2 ORDER BY r.id")
    @Query ("SELECT r from Reagent r INNER JOIN r.elements e GROUP BY r.id, e HAVING e.atomicNumber IN (?1) AND COUNT(e)>=?2 ORDER BY r.id")
    public Page<T> findByElementsGreaterThan (List<Integer> id, long count, Pageable pageable);
}

// select r.id, r.formula, r.spanish_name, er.element_id, COUNT(er.element_id) AS 'Total Element' from reagent r inner join elements_reagents er WHERE r.id=er.reagent_id GROUP BY r.id, er.element_id HAVING er.element_id IN (1,16) AND COUNT(er.element_id) >= 2 ORDER BY r.id

/** SQL TO IMPLEMENT */
// select r.id, r.formula, r.spanish_name, er.element_id, COUNT(er.element_id) AS 'Total Element' from reagent r inner join elements_reagents er WHERE r.id=er.reagent_id GROUP BY r.id, er.element_id 
// HAVING er.element_id IN (1,16) 
// AND COUNT(er.element_id) >= (
//     CASE WHEN er.element_id = 1 THEN 6
//     WHEN er.element_id = 16 THEN 2
//     END)
// ORDER BY r.id