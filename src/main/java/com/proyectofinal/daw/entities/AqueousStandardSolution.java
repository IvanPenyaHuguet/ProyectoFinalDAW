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
      
    
    @Basic
    @Temporal(TemporalType.DATE)
    private Calendar expiryDate;

    
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
