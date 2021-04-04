package com.proyectofinal.daw.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class ReagentSupplierPK implements Serializable{
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    
    private Long supplierId;
    private Long reagentId;

    public Long getSupplierId() {
        return this.supplierId;
    }

    public void setSupplierId(Long supplierId) {
        this.supplierId = supplierId;
    }

    public Long getReagentId() {
        return this.reagentId;
    }

    public void setReagentId(Long reagentId) {
        this.reagentId = reagentId;
    }
    
}
