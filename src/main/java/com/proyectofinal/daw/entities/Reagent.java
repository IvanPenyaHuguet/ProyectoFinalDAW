package com.proyectofinal.daw.entities;


import java.util.Calendar;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeInfo.*;
import com.fasterxml.jackson.annotation.JsonSubTypes;

import org.hibernate.annotations.ColumnDefault;

/**
 * Model representation of a reagent
 */
@Entity
// @MappedSuperclass
@Table
@Inheritance(strategy=InheritanceType.SINGLE_TABLE) //(Una sola tabla con todos los campos adicionales de hijos)
// @Inheritance(strategy = InheritanceType.JOINED) //(Una tabla con los campos en comun y otras tablas con los campos diferentes)
//@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS) // Una table por cada clase, parecido a @MappedSuperClass
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING, name = "reagentType")
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = As.PROPERTY, property = "reagentType")
@JsonSubTypes({
    @JsonSubTypes.Type(value = InorganicReagent.class, name = "inorganic"),
    @JsonSubTypes.Type(value = OrganicReagent.class, name = "organic")
})
public abstract class Reagent {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;    
    @Column(unique = true, nullable = false)
    private String spanishName;
    private String englishName;
    @Column(nullable = false, unique=true)
    private String internalReference;   
    @ColumnDefault("1") 
    private int quantity;  
    private String formula;
    @OneToOne(mappedBy = "reagent", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Commentary commentary;
    @ManyToMany(mappedBy = "reagents")
    private List<Supplier> suppliers;
    private float molecularWeight;
    @Basic
    @Temporal(TemporalType.DATE)
    private Calendar entryDate;
    @Column(unique=true)
    private String cas;

    public String getCas() {
        return this.cas;
    }

    public void setCas(String cas) {
        this.cas = cas;
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
    public String getSpanishName() {
        return this.spanishName;
    }

    
    /** 
     * @param spanishName
     */
    public void setSpanishName(String spanishName) {
        this.spanishName = spanishName;
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
    public String getInternalReference() {
        return this.internalReference;
    }

    
    /** 
     * @param internalReference
     */
    public void setInternalReference(String internalReference) {
        this.internalReference = internalReference;
    }

    
    /** 
     * @return int
     */
    public int getQuantity() {
        return this.quantity;
    }

    
    /** 
     * @param quantity
     */
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    
    /** 
     * @return String
     */
    public String getFormula() {
        return this.formula;
    }

    
    /** 
     * @param formula
     */
    public void setFormula(String formula) {
        this.formula = formula;
    }

    
    /** 
     * @return Commentary
     */
    public Commentary getCommentary() {
        return this.commentary;
    }

    
    /** 
     * @param commentary
     */
    public void setCommentary(Commentary commentary) {
        this.commentary = commentary;
    }

    
    /** 
     * @return List<Supplier>
     */
    public List<Supplier> getSuppliers() {
        return this.suppliers;
    }

    
    /** 
     * @param suppliers
     */
    public void setSuppliers(List<Supplier> suppliers) {
        this.suppliers = suppliers;
    }

    
    /** 
     * @return float
     */
    public float getMolecularWeight() {
        return this.molecularWeight;
    }

    
    /** 
     * @param molecularWeight
     */
    public void setMolecularWeight(float molecularWeight) {
        this.molecularWeight = molecularWeight;
    }

    
    /** 
     * @return Calendar
     */
    public Calendar getEntryDate() {
        return this.entryDate;
    }

    
    /** 
     * @param entryDate
     */
    public void setEntryDate(Calendar entryDate) {
        this.entryDate = entryDate;
    }

}
