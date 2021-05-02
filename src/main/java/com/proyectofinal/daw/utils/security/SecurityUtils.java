package com.proyectofinal.daw.utils.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * Helper class with util functions relative to security
 */
public class SecurityUtils {
    
    
    /** 
     * Get the user logged
     * @return UserDetails Logged user details
     */
    public static UserDetails getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if ( authentication == null || authentication.getPrincipal() instanceof String) {
            return null;
        }
        return ( UserDetails ) ( authentication == null ? null : authentication.getPrincipal());
    }
}
