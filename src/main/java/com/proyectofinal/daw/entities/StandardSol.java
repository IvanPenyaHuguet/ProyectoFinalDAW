package com.proyectofinal.daw.entities;

import java.util.Calendar;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Table;


@Entity
@Table
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class StandardSol {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(nullable = false)
    private String internalReference; 
    private String name;
    @ManyToMany(mappedBy = "standards")
    private List<Element> elements;
    @ManyToMany(mappedBy = "standards")
    private List<Element> suppliers;
    private int concentration;
    @Basic
    @Temporal(TemporalType.DATE)
    private Calendar entryDate;

    
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
     * @return List<Element>
     */
    public List<Element> getSuppliers() {
        return this.suppliers;
    }

    
    /** 
     * @param suppliers
     */
    public void setSuppliers(List<Element> suppliers) {
        this.suppliers = suppliers;
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
     * @return List<Element>
     */
    public List<Element> getElements() {
        return this.elements;
    }

    
    /** 
     * @param elements
     */
    public void setElements(List<Element> elements) {
        this.elements = elements;
    }

    
    /** 
     * @return int
     */
    public int getConcentration() {
        return this.concentration;
    }

    
    /** 
     * @param concentration
     */
    public void setConcentration(int concentration) {
        this.concentration = concentration;
    }
    
}