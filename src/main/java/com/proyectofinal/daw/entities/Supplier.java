package com.proyectofinal.daw.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;


@Entity
public class Supplier {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, unique = true)
    private String name;
    @ManyToMany(cascade = {
        CascadeType.PERSIST,
        CascadeType.MERGE
    })
    @JoinTable(
            name = "reagent_supplier",
            joinColumns = {@JoinColumn(name = "supplier_id")},
            inverseJoinColumns = {@JoinColumn(name = "reagent_id")}
    )
    private List<Reagent> reagents;
    @ManyToMany(cascade = {
        CascadeType.PERSIST,
        CascadeType.MERGE
    })
    @JoinTable(
            name = "standardSol_supplier",
            joinColumns = {@JoinColumn(name = "supplier_id")},
            inverseJoinColumns = {@JoinColumn(name = "standard_id")}
    )
    private List<Reagent> standards;

    
    /** 
     * @return List<Reagent>
     */
    public List<Reagent> getStandards() {
        return this.standards;
    }

    
    /** 
     * @param standards
     */
    public void setStandards(List<Reagent> standards) {
        this.standards = standards;
    }

    
    /** 
     * @return long
     */
    public long getId() {
        return this.id;
    }

    
    /** 
     * @param id
     */
    public void setId(long id) {
        this.id = id;
    }

    
    /** 
     * @return String
     */
    public String getName() {
        return this.name;
    }

    
    /** 
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    
    /** 
     * @return List<Reagent>
     */
    public List<Reagent> getReagents() {
        return this.reagents;
    }

    
    /** 
     * @param reagents
     */
    public void setReagents(List<Reagent> reagents) {
        this.reagents = reagents;
    }
}
