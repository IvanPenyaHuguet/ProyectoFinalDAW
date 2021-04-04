package com.proyectofinal.daw.services.authentication;

import java.util.List;


/**
 * Response JWT object for the auntentication process
 */
public class JwtAuthenticationResponse {

    private String token;

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }
    private String user;
    private List<String> role;

    public List<String> getRole() {
        return this.role;
    }

    public void setRole(List<String> role) {
        this.role = role;
    }

   
    
    public String getUser() {
        return this.user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    
    public JwtAuthenticationResponse () {

    }
    public JwtAuthenticationResponse( String jwt) {
        this.token = jwt;
    }
    public JwtAuthenticationResponse( String jwt ,String user) {
        this.token = jwt;
        this.user = user;
    }
    public JwtAuthenticationResponse( String jwt ,String user, List<String> role) {
        this.token = jwt;
        this.user = user;
        this.role = role;
    }
    
}
