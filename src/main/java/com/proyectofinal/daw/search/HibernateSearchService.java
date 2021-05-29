package com.proyectofinal.daw.search;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.proyectofinal.daw.entities.Reagent;

import org.hibernate.search.engine.search.query.SearchResult;
import org.hibernate.search.mapper.orm.Search;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class HibernateSearchService {
    
    @PersistenceContext
    EntityManager entityManager;

    
    @Transactional
    public List<Reagent> genericSearch(String searchTerm) {

        SearchSession searchSession = Search.session( entityManager ); 
        SearchResult<Reagent> result = searchSession.search( Reagent.class ) 
            .where( f -> f.match() 
                .fields( "name", "englishName", "cas" )
                .matching( searchTerm ) )
                .fetch( 20 ); 
        //long totalHitCount = result.total().hitCount(); 
        List<Reagent> hits = result.hits();             
        
        return hits;
    }

}
