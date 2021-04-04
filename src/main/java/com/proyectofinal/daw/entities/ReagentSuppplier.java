package com.proyectofinal.daw.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="reagent_supplier")
@JsonIgnoreProperties({"reagent"})
public class ReagentSuppplier implements Serializable{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private ReagentSupplierPK id;

    @ManyToOne()
    @MapsId("supplierId")
    private Supplier supplier;

    @ManyToOne()
    @MapsId("reagentId")
    private Reagent reagent;

    private String supplierCode;

    public ReagentSupplierPK getId() {
        return this.id;
    }

    public void setId(ReagentSupplierPK id) {
        this.id = id;
    }

    public Supplier getSupplier() {
        return this.supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public Reagent getReagent() {
        return this.reagent;
    }

    public void setReagent(Reagent reagent) {
        this.reagent = reagent;
    }

    public String getSupplierCode() {
        return this.supplierCode;
    }

    public void setSupplierCode(String supplierCode) {
        this.supplierCode = supplierCode;
    }
    
}
