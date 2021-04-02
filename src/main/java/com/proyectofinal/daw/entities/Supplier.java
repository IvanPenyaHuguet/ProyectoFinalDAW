package com.proyectofinal.daw.entities;

import java.io.Serializable;
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
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table
public class Supplier implements Serializable{
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;
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
    @JsonIgnoreProperties("suppliers")
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
    @JsonIgnoreProperties("suppliers")
    private List<StandardSol> standards;    
    private Seller seller;

    public Seller getSeller() {
        return this.seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }  
   

    public List<StandardSol> getStandards() {
        return this.standards;
    }

    public void setStandards(List<StandardSol> standards) {
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
