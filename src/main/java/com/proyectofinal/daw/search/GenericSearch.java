package com.proyectofinal.daw.search;

import java.util.List;
import java.util.Map;

import com.proyectofinal.daw.entities.dto.PageSearchDTO;

import org.springframework.transaction.annotation.Transactional;
import org.hibernate.search.engine.search.query.SearchQuery;
import org.hibernate.search.engine.search.query.SearchResult;

public interface GenericSearch<T> {
    
    @Transactional
    public SearchResult<T> genericSearch(Class<T> parameterClass,String searchTerm, List<String> searchFields, int resultsToShow );

    @Transactional
    public PageSearchDTO<T> paginatedGenericSearch(Class<T> parameterClass,String searchTerm, List<String> searchFields, int totalResults, int resultsToShow );

    @Transactional
    public List<T> genericMultipleClassSearch(List<Class<? extends T>> parameterClass,String searchTerm, List<String> searchFields );

    @Transactional
    public SearchQuery <T> prepareQuery (Class<T> parameterClass, String searchTerm, List<String> searchFields);

    @Transactional
    public List<T> existsField (Class<T> parameterClass, String searchField);  
    
    @Transactional
    public PageSearchDTO<T> searchReagentElements (Class<T> parameterClass, Map <Integer, Integer> searchTerm, int resultsShowed, int resultsToShow);

    @Transactional
    public PageSearchDTO<T> executeQueries (Class<T> parameterClass, int resultsShowed, int resultsToShow, SearchQuery<T> ...queries );

}
