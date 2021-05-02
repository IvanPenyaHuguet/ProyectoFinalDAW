package com.proyectofinal.daw.entities;

/**
 * Interface that forces to implemen audit to entities
 */
public interface Auditable {

    /**
     * @return Audit
     */
    Audit getAudit();

    /**
     * @param audit Audit
     */
    void setAudit(Audit audit);
}