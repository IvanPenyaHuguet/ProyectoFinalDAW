package com.proyectofinal.daw.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


/**
 * Model for a commentary
 */
@Entity
@Table
@JsonIgnoreProperties({"reagents", "standards", "reagent", "role" })
public class Commentary implements Serializable{
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JoinColumn(name = "reagent_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties("commentary")
    private Reagent reagent;
    @ManyToOne()    
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnoreProperties({"commentaries", "role", "pass"})
    private User user;   
    @Column(nullable = false) 
    private String commentary;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date creationDate;
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updatedDate;

    
    /** 
     * @return Date
     */
    public Date getUpdatedDate() {
        return this.updatedDate;
    }

    
    /** 
     * @param updatedDate
     */
    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
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
     * @return long
     */
    public long getId() {
        return this.id;
    }

    
    /** 
     * @param id
     */
    public void setId(long id) {
        this.id = id;
    }

    
    /** 
     * @return Reagent
     */
    public Reagent getReagent() {
        return this.reagent;
    }

    
    /** 
     * @param reagent
     */
    public void setReagent(Reagent reagent) {
        this.reagent = reagent;
    }

    
    /** 
     * @return User
     */
    public User getUser() {
        return this.user;
    }

    
    /** 
     * @param user
     */
    public void setUser(User user) {
        this.user = user;
    }

    
    /** 
     * @return String
     */
    public String getCommentary() {
        return this.commentary;
    }

    
    /** 
     * @param commentary
     */
    public void setCommentary(String commentary) {
        this.commentary = commentary;
    }
    
}
