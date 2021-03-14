package com.proyectofinal.daw.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;
    @Column(nullable = false)
    private String name;
    private String surname;
    @Column(nullable = false, unique = true)
    private String userName;
    @Column(nullable = false)
    private String pass;
    @OneToMany(mappedBy = "user", cascade = {
        CascadeType.PERSIST,
        CascadeType.MERGE
    }, orphanRemoval = true,fetch = FetchType.LAZY)
    private List<Commentary> commentaries;
    
    
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
     * @return Role
     */
    public Role getRole() {
        return this.role;
    }

    
    /** 
     * @param role
     */
    public void setRole(Role role) {
        this.role = role;
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
    public String getUserName() {
        return this.userName;
    }

    
    /** 
     * @param userName
     */
    public void setUserName(String userName) {
        this.userName = userName;
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
