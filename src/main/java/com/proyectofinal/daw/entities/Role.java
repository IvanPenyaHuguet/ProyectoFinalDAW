package com.proyectofinal.daw.entities;


public enum Role{
    GUEST,
    TECH,    
    ADMIN;

    public String getAuthority() {
        return name();
    }
}
