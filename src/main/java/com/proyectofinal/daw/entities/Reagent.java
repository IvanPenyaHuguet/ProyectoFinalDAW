package com.proyectofinal.daw.entities;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

@Entity
// @MappedSuperclass
@Inheritance(strategy=InheritanceType.SINGLE_TABLE) //(Una sola tabla con todos los campos adicionales de hijos)
// @Inheritance(strategy = InheritanceType.JOINED) //(Una tabla con los campos en comun y otras tablas con los campos diferentes)
//@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS) // Una table por cada clase, parecido a @MappedSuperClass
public abstract class Reagent {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(unique = true, nullable = false)
    private String spanishName;
    private String englishName;
    @Column(nullable = false)
    private String internalReference;    
    private int quantity;  
    private String formula;
    @OneToOne(mappedBy = "reagent", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Commentary commentary;
    @ManyToMany(mappedBy = "reagents")
    private List<Supplier> suppliers;
    private float molecularWeight;

}
