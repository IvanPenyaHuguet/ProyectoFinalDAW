package com.proyectofinal.daw.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.JoinColumn;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table
public class User implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;    
    @ManyToMany  (fetch = FetchType.EAGER)
    @JsonIgnoreProperties("user") 
    @JoinTable(
            name = "role_user",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id")}
    )  
    private List<Role> role;    
    @Column(nullable = false)
    private String name;
    private String surname;
    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false)
    private String pass;
    @OneToMany(mappedBy = "user", cascade = {
        CascadeType.PERSIST,
        CascadeType.MERGE
    }, orphanRemoval = true,fetch = FetchType.LAZY)
    @JsonIgnoreProperties("user")
    private List<Commentary> commentaries;
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date creationDate;
    
    
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
     * @return List<Role>
     */
    public List<Role> getRole() {
        return this.role;
    }

    
    /** 
     * @param role
     */
    public void setRole(List<Role> role) {
        this.role = role;
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
    public String getName() {
        return this.name;
    }

    
    /** 
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    
    /** 
     * @return String
     */
    public String getSurname() {
        return this.surname;
    }

    
    /** 
     * @param surname
     */
    public void setSurname(String surname) {
        this.surname = surname;
    }

    
    /** 
     * @return String
     */
    public String getUsername() {
        return this.username;
    }

    
    /** 
     * @param username
     */
    public void setUsername(String username) {
        this.username = username;
    }

    
    /** 
     * @return String
     */
    public String getPass() {
        return this.pass;
    }

    
    /** 
     * @param pass
     */
    public void setPass(String pass) {
        this.pass = pass;
    }

    
    /** 
     * @return List<Commentary>
     */
    public List<Commentary> getCommentaries() {
        return this.commentaries;
    }

    
    /** 
     * @param commentaries
     */
    public void setCommentaries(List<Commentary> commentaries) {
        this.commentaries = commentaries;
    }
}
