package com.proyectofinal.daw.entities.config;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table
public class ApplicationConfiguration {

    private boolean canGuest;
    private boolean isPageAllCompounds;


    public boolean isCanGuest() {
        return this.canGuest;
    }

    public boolean getCanGuest() {
        return this.canGuest;
    }

    public void setCanGuest(boolean canGuest) {
        this.canGuest = canGuest;
    }

    public boolean isIsPageAllCompounds() {
        return this.isPageAllCompounds;
    }

    public boolean getIsPageAllCompounds() {
        return this.isPageAllCompounds;
    }

    public void setIsPageAllCompounds(boolean isPageAllCompounds) {
        this.isPageAllCompounds = isPageAllCompounds;
    }


    
}
