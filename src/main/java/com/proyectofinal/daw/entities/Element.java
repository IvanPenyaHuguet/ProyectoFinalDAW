package com.proyectofinal.daw.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table
@JsonIgnoreProperties({"elements", "standards", "reagents"})
public class Element implements Serializable{
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Id    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int atomicNumber;        
    @Column(nullable = false)
    private String englishName;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private float mass;
    @Column(nullable = false)
    private String element;    
    @ManyToMany(cascade = {
        CascadeType.PERSIST,
        CascadeType.MERGE
    })
    @JoinTable(
        name = "element_standardSol",
        joinColumns = {@JoinColumn(name = "element_id")},
        inverseJoinColumns = {@JoinColumn(name = "standard_id")}
    )
    @JsonIgnoreProperties("standards")
    private List<StandardSol> standards;
    @Column(nullable = false)
    private int period;    
    private int tableGroup;    
    private float electronegativity;
    @ManyToMany(cascade = {
        CascadeType.PERSIST,
        CascadeType.MERGE
    })
    @JoinTable(
        name = "elements_reagents",
        joinColumns = {@JoinColumn(name = "element_id")},
        inverseJoinColumns = {@JoinColumn(name = "reagent_id")}
    )
    @JsonIgnoreProperties("reagents")
    private List<Reagent> reagents;

    public List<Reagent> getReagents() {
        return this.reagents;
    }

    public void setReagents(List<Reagent> reagents) {
        this.reagents = reagents;
    }

    
    /** 
     * @return float
     */
    public float getMass() {
        return this.mass;
    }

    
    /** 
     * @param mass
     */
    public void setMass(float mass) {
        this.mass = mass;
    }

    
    /** 
     * @return int
     */
    public int getTableGroup() {
        return this.tableGroup;
    }

    
    /** 
     * @param tableGroup
     */
    public void setTableGroup(int tableGroup) {
        this.tableGroup = tableGroup;
    }

    
    /** 
     * @return int
     */
    public int getAtomicNumber() {
        return this.atomicNumber;
    }

    
    /** 
     * @param atomicNumber
     */
    public void setAtomicNumber(int atomicNumber) {
        this.atomicNumber = atomicNumber;
    }

    
    /** 
     * @return String
     */
    public String getEnglishName() {
        return this.englishName;
    }

    
    /** 
     * @param englishName
     */
    public void setEnglishName(String englishName) {
        this.englishName = englishName;
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
     * @return String
     */
    public String getElement() {
        return this.element;
    }

    
    /** 
     * @param element
     */
    public void setElement(String element) {
        this.element = element;
    }

    
    /** 
     * @return List<StandardSol>
     */
    public List<StandardSol> getStandards() {
        return this.standards;
    }

    
    /** 
     * @param standards
     */
    public void setStandards(List<StandardSol> standards) {
        this.standards = standards;
    }

    
    /** 
     * @return int
     */
    public int getPeriod() {
        return this.period;
    }

    
    /** 
     * @param period
     */
    public void setPeriod(int period) {
        this.period = period;
    }    

    
    /** 
     * @return float
     */
    public float getElectronegativity() {
        return this.electronegativity;
    }

    
    /** 
     * @param electronegativity
     */
    public void setElectronegativity(float electronegativity) {
        this.electronegativity = electronegativity;
    }
    
}
