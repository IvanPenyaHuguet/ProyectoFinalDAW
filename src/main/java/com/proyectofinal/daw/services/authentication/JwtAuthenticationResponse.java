package com.proyectofinal.daw.services.authentication;

/**
 * Response JWT object for the auntentication process
 */
public class JwtAuthenticationResponse {

    private String jwt;

    public String getJwt() {
        return this.jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
    public JwtAuthenticationResponse () {

    }
    public JwtAuthenticationResponse( String jwt) {
        this.jwt = jwt;
    }
    
}
