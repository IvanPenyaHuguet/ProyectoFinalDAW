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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;

/**
 * Model for a location
 */
@Entity
@Table
@JsonIgnoreProperties({"reagents", "solutions"})
@Indexed
public class Location implements Serializable {
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, unique = true)
    @FullTextField
    private String name;
    @OneToMany(mappedBy = "location",cascade = CascadeType.ALL, orphanRemoval = true)   
    @JsonIgnore
    private List<Reagent> reagents;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "location_id")
    @JsonIgnore
    private List<StandardSol> solutions;
    @Column(nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long viewOrder;

    
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


    public long getViewOrder() {
        return this.viewOrder;
    }

    public void setViewOrder(long viewOrder) {
        this.viewOrder = viewOrder;
    }

}
