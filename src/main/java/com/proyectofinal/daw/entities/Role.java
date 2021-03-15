package com.proyectofinal.daw.entities;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority{
    GUEST,
    TECH,    
    ADMIN;

    public String getAuthority() {
        return name();
    }
}
