package com.proyectofinal.daw.entities;

import org.springframework.security.core.GrantedAuthority;

public enum Role{
    GUEST,
    TECH,    
    ADMIN;

    public String getAuthority() {
        return name();
    }
}
