package com.proyectofinal.daw.entities;

import java.util.Date;

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
    private Date expiryDate;
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
     * @return Date
     */
    public Date getExpiryDate() {
        return this.expiryDate;
    }

    
    /** 
     * @param expiryDate
     */
    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }
}
