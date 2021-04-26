package com.proyectofinal.daw.entities;

import java.util.Calendar;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Table;

@Entity
@Table
public class AqueousStandardSolution extends StandardSol{
      
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Basic
    @Temporal(TemporalType.DATE)
    private Calendar expiryDate;
    private float molecularWeight;

    
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
    public Calendar getExpiryDate() {
        return this.expiryDate;
    }

    
    /** 
     * @param expiryDate
     */
    public void setExpiryDate(Calendar expiryDate) {
        this.expiryDate = expiryDate;
    }
}
