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


/**
 * Model for a commentary
 */
@Entity
@Table
public class Commentary implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JoinColumn(name = "reagent_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties("commentary")
    private Reagent reagent;
    @ManyToOne()    
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnoreProperties("commentaries")
    private User user;   
    @Column(nullable = false) 
    private String commentary;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;

    public Date getCreationDate() {
        return this.creationDate;
    }

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
