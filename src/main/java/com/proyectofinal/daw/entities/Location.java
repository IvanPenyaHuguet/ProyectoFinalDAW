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
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Model for a location
 */
@Entity
@Table
public class Location implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, unique = true)
    private String name;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "location_id")
    private List<Reagent> reagents;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "location_id")
    private List<StandardSol> solutions;

    
    /** 
     * @return List<StandardSol>
     */
    public List<StandardSol> getSolutions() {
        return this.solutions;
    }

    
    /** 
     * @param solutions
     */
    public void setSolutions(List<StandardSol> solutions) {
        this.solutions = solutions;
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
