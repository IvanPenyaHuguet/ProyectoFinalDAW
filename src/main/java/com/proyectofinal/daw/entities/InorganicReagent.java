package com.proyectofinal.daw.entities;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;



@Entity
@DiscriminatorValue("Inorganic")
public class InorganicReagent extends Reagent{
    
    private String utilization;   

    /** 
     * @return String
     */
    public String getUtilization() {
        return this.utilization;
    }

    
    /** 
     * @param utilization
     */
    public void setUtilization(String utilization) {
        this.utilization = utilization;
    }
}
