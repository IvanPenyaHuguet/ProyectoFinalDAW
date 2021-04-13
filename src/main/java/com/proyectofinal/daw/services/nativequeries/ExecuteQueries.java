package com.proyectofinal.daw.services.nativequeries;

import java.util.List;
import java.util.Optional;

import javax.persistence.Tuple;

import com.proyectofinal.daw.entities.Reagent;

import org.hibernate.Hibernate;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExecuteQueries {
    

    @Autowired
    SQLSession sess; 
    
    @SuppressWarnings ({"unchecked"})
    @Transactional
    public Optional<List<Tuple>> executeNativeQueryList ( String sql) {
        Transaction tx = null;
        List<Tuple> rows = null;

        try {
            sess.openSession();
            tx = sess.beginTransaction();
            rows = sess.createNativeQuery(sql).getResultList();
            tx.commit();
        }   
        catch (Exception e) {
            if (tx!=null) tx.rollback();
            throw e;
        }
        finally {
            sess.closeSession();
        }
        return Optional.ofNullable(rows);
    }

    @SuppressWarnings ({"unchecked"})
    @Transactional
    public Optional<List<Reagent>> executeNativeQueryReagent ( String sql) {       
        List<Reagent> rows = null;

        try {
            sess.openSession();            
            rows = sess.createNativeQuery(sql)            
            .addEntity("r", Reagent.class) 
            .getResultList();
            for (Reagent r : rows) {
                Hibernate.initialize(r.getSuppliers());
                Hibernate.initialize(r.getElements());
            }            
        }   
        catch (Exception e) {            
            throw e;
        }
        finally {
            sess.closeSession();
        }
        return Optional.ofNullable(rows);
    }
    
    
    @Transactional
    public Optional<Long> executeNativeQueryGetCount( String sql) {
        Transaction tx = null;
        Long total = 0L;

        try {
            sess.openSession();
            tx = sess.beginTransaction();
            total = Long.parseLong(sess.createNativeQuery(sql).getSingleResult().toString());
            tx.commit();
        }   
        catch (Exception e) {
            if (tx!=null) tx.rollback();
            throw e;
        }
        finally {
            sess.closeSession();
        }
        return Optional.ofNullable(total);
    }
    

}
