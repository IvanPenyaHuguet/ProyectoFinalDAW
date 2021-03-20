package com.proyectofinal.daw.services.authentication;

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
    private String role;

    public String getRole() {
        return this.role;
    }

    public void setRole(String role) {
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
    public JwtAuthenticationResponse( String jwt ,String user, String role) {
        this.token = jwt;
        this.user = user;
        this.role = role;
    }
    
}
