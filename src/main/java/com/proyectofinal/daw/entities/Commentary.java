package com.proyectofinal.daw.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


/**
 * Model for a commentary
 */
@Entity
@Table
public class Commentary {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JoinColumn(name = "reagent_id", nullable = false)
    @OneToOne(fetch = FetchType.LAZY)
    private Reagent reagent;
    @ManyToOne()    
    @JoinColumn(name = "user_id", nullable = false)
    private User user;   
    @Column(nullable = false) 
    private String commentary;

    
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
