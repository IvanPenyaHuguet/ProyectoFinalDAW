package com.proyectofinal.daw.entities;

import java.io.Serializable;

import java.util.Date;

import javax.persistence.Embeddable;

import com.proyectofinal.daw.utils.security.SecurityUtils;


/**
 * Audit class that implements all necessary columns to keep control all the information modified on database
 */
@Embeddable
public class Audit implements Serializable {
    
    private static final long serialVersionUID = 1L;
    public static final String DEFAULT_USER = "unknown";
    public static final String UNDELETED_RESTRICTION = "deleted = 0";
    public static final String DELETED_RESTRICTION = "deleted = 1";

    private String creationUser;
    private Date creationDate;    
    private String modifyingUser;    
    private Date modifyingDate;
    private String deletedUser;
    private Date deletedDate;    
    private boolean deleted;


    
    /** 
     * @return String
     */
    public String getCreationUser() {
        return this.creationUser;
    }

    
    /** 
     * @param creationUser
     */
    public void setCreationUser(String creationUser) {
        this.creationUser = creationUser;
    }

    
    /** 
     * @return Date
     */
    public Date getCreationDate() {
        return this.creationDate;
    }

    
    /** 
     * @param creationDate
     */
    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    
    /** 
     * @return String
     */
    public String getModifyingUser() {
        return this.modifyingUser;
    }

    
    /** 
     * @param modifyingUser
     */
    public void setModifyingUser(String modifyingUser) {
        this.modifyingUser = modifyingUser;
    }

    
    /** 
     * @return Date
     */
    public Date getModifyingDate() {
        return this.modifyingDate;
    }

    
    /** 
     * @param modifyingDate
     */
    public void setModifyingDate(Date modifyingDate) {
        this.modifyingDate = modifyingDate;
    }

    
    /** 
     * @return String
     */
    public String getDeletedUser() {
        return this.deletedUser;
    }

    
    /** 
     * @param deletedUser
     */
    public void setDeletedUser(String deletedUser) {
        this.deletedUser = deletedUser;
    }

    
    /** 
     * @return Date
     */
    public Date getDeletedDate() {
        return this.deletedDate;
    }

    
    /** 
     * @param deletedDate
     */
    public void setDeletedDate(Date deletedDate) {
        this.deletedDate = deletedDate;
    }

    
    /** 
     * @return boolean
     */
    public boolean isDeleted() {
        return this.deleted;
    }

    
    /** 
     * @return boolean
     */
    public boolean getDeleted() {
        return this.deleted;
    }

    
    /** 
     * @param deleted
     */
    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    /** factory method to create audit objects.
     * @return objecto auditable
     */
    public static Audit getNewInstance() {
        Audit audit = new Audit();
        audit.setCreationUser(getCurrentUserName());
        audit.setCreationDate(new Date());
        return audit;
    }
    
    /**
     * Executes the deleted of a db entry
     * @param auditable objecto auditable
     */
    public static void delete(Audit audit) {
        audit.setDeletedDate(new Date());        
        audit.setDeletedUser(getCurrentUserName());
        audit.setDeleted(true);
    }

    /**
     * Executes the deleted of a db entry
     * @param auditable objecto auditable
     */
    public static void delete(Auditable auditable) {
        Audit audit = auditable.getAudit();
        audit.setDeletedDate(new Date());        
        audit.setDeletedUser(getCurrentUserName());
        audit.setDeleted(true);
    }
    
    /**
     * Executes the deleted of a db entry
     */
    public void delete() {
        Audit audit = this;
        audit.setDeletedDate(new Date());        
        audit.setDeletedUser(getCurrentUserName());
        audit.setDeleted(true);
    }

    /** 
     * To execute at saving of a db entry
     * @param auditable auditable
     */
    public static void save(Auditable auditable) {
        Audit audit = auditable.getAudit();
        if (audit == null) {
            audit = Audit.getNewInstance();
            auditable.setAudit(audit);
        } else {
            audit.setModifyingUser(getCurrentUserName());
            audit.setModifyingDate(new Date());
        }
    }

    private static String getCurrentUserName() {
        if (SecurityUtils.getCurrentUser() != null) {
            return SecurityUtils.getCurrentUser().getUsername();
        }
        
        return DEFAULT_USER;
    }

}
