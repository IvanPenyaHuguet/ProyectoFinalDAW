package com.proyectofinal.daw.search;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import com.proyectofinal.daw.entities.Reagent;

import org.hibernate.search.mapper.orm.Search;
import org.hibernate.search.mapper.orm.massindexing.MassIndexer;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;


@Component
public class HibernateSearchInit implements ApplicationListener<ContextRefreshedEvent>{
    
    @PersistenceContext
	private EntityManager entityManager;
    
	@Transactional
    @Override
	public void onApplicationEvent (ContextRefreshedEvent event) {
		
		try {
			SearchSession searchSession = Search.session( entityManager );
            MassIndexer indexer = searchSession.massIndexer(Reagent.class ).threadsToLoadObjects( 1 ); 
            indexer.startAndWait();
		} catch (InterruptedException e) {
			System.out.println("Error occured trying to build Hibernate Search indexes "
					+ e.toString());
		}
	}
}
