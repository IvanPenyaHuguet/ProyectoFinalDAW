package com.proyectofinal.daw.entities;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority{
    ROLE_GUEST,
    ROLE_TECH,    
    ROLE_ADMIN;

    public String getAuthority() {
        return name();
    }
}
