package com.proyectofinal.daw.services.nativequeries;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SQLSession {
    
    @Autowired
    SessionFactory factory;

    Session session;    

    public Session getSession() {
        return this.session;
    }

    public void setSession(Session session) {
        this.session = session;
    }

    public void openSession() {
        this.session = factory.openSession();
    }

    public void closeSession () {
        session.close();
    }

    public Transaction beginTransaction () {
        return session.beginTransaction();
    }
    @SuppressWarnings("rawtypes")
    public NativeQuery createNativeQuery(String sql) {
        return session.createNativeQuery(sql);
    }
    

}
