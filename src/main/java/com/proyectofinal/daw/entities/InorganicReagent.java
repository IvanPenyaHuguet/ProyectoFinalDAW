package com.proyectofinal.daw.entities;

import javax.persistence.Entity;

@Entity
public class InorganicReagent extends Reagent{
    
    private String utilization;
    private String cas;

    
    /** 
     * @return String
     */
    public String getCas() {
        return this.cas;
    }

    
    /** 
     * @param cas
     */
    public void setCas(String cas) {
        this.cas = cas;
    }

    
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
