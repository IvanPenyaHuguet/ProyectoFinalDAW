package com.proyectofinal.daw.entities;

import java.io.Serializable;

import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class Seller implements Serializable{
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false)
    private String webUrl;

}
