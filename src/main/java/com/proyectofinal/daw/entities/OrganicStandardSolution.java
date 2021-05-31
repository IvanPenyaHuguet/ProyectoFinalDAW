package com.proyectofinal.daw.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;


@Entity
@Table
public class OrganicStandardSolution extends StandardSol{
        
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Column
    @FullTextField( analyzer= "spanish") 
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
