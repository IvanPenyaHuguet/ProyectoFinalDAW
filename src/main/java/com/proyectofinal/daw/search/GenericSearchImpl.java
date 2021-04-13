package com.proyectofinal.daw.search;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.proyectofinal.daw.entities.dto.PageSearchDTO;

import org.hibernate.search.engine.search.query.SearchQuery;
import org.hibernate.search.engine.search.query.SearchResult;
import org.hibernate.search.mapper.orm.Search;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.springframework.stereotype.Service;



@Service
public class GenericSearchImpl<T> implements GenericSearch<T>{


    @PersistenceContext
    EntityManager entityManager;


    @Override
    public SearchQuery <T> prepareQuery (Class<T> parameterClass, String searchTerm, List<String> searchFields) {
        SearchSession searchSession = Search.session( entityManager );
        return searchSession.search( parameterClass ) 
            .where( f -> f.match() 
                .fields( searchFields.toArray(new String[searchFields.size()]) )
                .matching( searchTerm )
                )
            .toQuery();
    }

    @Override
    public SearchResult<T> genericSearch(Class<T> parameterClass, String searchTerm, List<String> searchFields, int resultsToShow ) {

        SearchSession searchSession = Search.session( entityManager ); 
        SearchResult<T> result = searchSession.search( parameterClass ) 
            .where( f -> f.match() 
                .fields( searchFields.toArray(new String[searchFields.size()]) )
                .matching( searchTerm ) 
                .fuzzy( 1,4 ) // No solo los buscados si no también aproximados, cambio de letras, el parámetro son las primeras letras que han de coincidir
                )
            .fetch( resultsToShow );
        return result;
    }

    @Override
    public PageSearchDTO<T> paginatedGenericSearch(Class<T> parameterClass, String searchTerm, List<String> searchFields, int resultsShowed, int resultsToShow ) {

        SearchSession searchSession = Search.session( entityManager ); 
        SearchResult<T> result = searchSession.search( parameterClass ) 
            .where( f -> f.match() 
                .fields( searchFields.toArray(new String[searchFields.size()]) )
                .matching( searchTerm ) 
                .fuzzy( 1,4 ) 
                )
            .fetch( resultsShowed, resultsToShow ); 
        long totalHitCount = result.total().hitCount(); 
        List<T> hits = result.hits();   
        PageSearchDTO<T> page = new PageSearchDTO<T>(hits, totalHitCount);
        return page;
    }

    @Override
    public List<T> existsField (Class<T> parameterClass, String searchField) {
        SearchSession searchSession = Search.session( entityManager ); 
        return searchSession.search( parameterClass )
            .where( f -> f.exists().field( searchField ) )
            .fetchHits( 20 );
    }

    @Override
    public List<T> genericMultipleClassSearch(List<Class<? extends T>> parameterClass, String searchTerm, List<String> searchFields) {
        SearchSession searchSession = Search.session( entityManager ); 
        SearchResult<T> result = searchSession.search( parameterClass ) 
            .where( f -> f.match() 
                .fields( searchFields.toArray(new String[searchFields.size()]) )
                .matching( searchTerm ) )
                .fetch( 20 ); 
        // long totalHitCount = result.total().hitCount(); // Resultados totales encontrados, quitado el fetch
        // long totalHitCountLowerBound = resultTotal.hitCountLowerBound(); // Calcula una estimacion del total si son muchos, solo si se usa .totalHitCountThreshold(1000) en la peticion
        // boolean hitCountExact = resultTotal.isHitCountExact();
        // boolean hitCountLowerBound = resultTotal.isHitCountLowerBound();
        List<T> hits = result.hits();   
        return hits;
    }   
}
