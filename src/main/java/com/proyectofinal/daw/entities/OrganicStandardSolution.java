package com.proyectofinal.daw.entities;


import javax.persistence.Column;
import javax.persistence.Entity;


@Entity
public class OrganicStandardSolution extends StandardSol{
        
    @Column
    private String medium;

    
    /** 
     * @return String
     */
    public String getMedium() {
        return this.medium;
    }

    
    /** 
     * @param medium
     */
    public void setMedium(String medium) {
        this.medium = medium;
    }
}
