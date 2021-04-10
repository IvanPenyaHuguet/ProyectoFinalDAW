package com.proyectofinal.daw.entities;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Lob;

import org.hibernate.search.mapper.pojo.mapping.definition.annotation.KeywordField;

@Entity
@DiscriminatorValue("Organic")
public class OrganicReagent extends Reagent{    
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @KeywordField
    private String secondaryIntReference;
    @Lob    
    private byte[] image;

    
    /** 
     * @return byte[]
     */
    public byte[] getImage() {
        return this.image;
    }

    
    /** 
     * @param image
     */
    public void setImage(byte[] image) {
        this.image = image;
    }

    
    /** 
     * @return String
     */
    public String getSecondaryIntReference() {
        return this.secondaryIntReference;
    }

    
    /** 
     * @param secondaryIntReference
     */
    public void setSecondaryIntReference(String secondaryIntReference) {
        this.secondaryIntReference = secondaryIntReference;
    }
    
    
}