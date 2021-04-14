package com.proyectofinal.daw.services.authentication;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

/**
 * Service with all the functions to work with Json Web Tokens
 */
@Service
public class JwtUtil {

    private SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS512);
    private static final String ISSUER = "chemdata";
    private static final int EXPIRE_TIME = 1000* 60* 60* 48;

    
    /** 
     * Extraction of the username data of a token
     * @param token Token to retrieve the subject
     * @return String  Subject retrieved of the token
     * @throws Exception
     */
    public String extractUsername(String token) throws Exception{
        return extractClaim(token, Claims::getSubject);
    }
    
    /** 
     * Extraction of the expiration date data of a token
     * @param token Token to retrieve the expiration date
     * @return Date Token expiration date retrieved
     * @throws Exception
     */
    public Date extractExpiration (String token) throws Exception {
        return extractClaim(token, Claims::getExpiration);
    }
    
    /** 
     * Extraction of the issuer data of a token
     * @param token Token to retrieve issuer
     * @return String Issuer retrieved of the token
     * @throws Exception
     */
    public String extractIssuer (String token) throws Exception {
        return extractClaim(token, Claims::getIssuer);
    }
    
    /** 
     * Extraction of the authorities data of a token
     * @param token Token to retrieve authorities
     * @return List<GrantedAuthority> The list of authorities of the token
     * @throws Exception 
     */
    @SuppressWarnings (value="unchecked")
    public List<GrantedAuthority> extractRole (String token) throws Exception { 
        final Claims claims = extractAllClaims(token); 
        final List<Map<String,String>> roles =  claims.get("roles", List.class);        
        List<GrantedAuthority> rolesList = new ArrayList<>();
        for (Map<String, String> rol: roles) {
            rolesList.add(new SimpleGrantedAuthority(rol.get("authority")));
        }   
        return rolesList;        
    }
    
    /** 
     * Generic function to extract a specific data of a token
     * @param token Token to generic retrieve an specific data
     * @param claimsResolver The specific data claim to return
     * @return T An object with the specified data
     * @throws Exception
     */
    public <T> T extractClaim(String token, Function<Claims,T> claimsResolver) throws Exception{
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    
    /** 
     * Extraction of all information data of a json web token
     * @param token Token to extract all claims
     * @return Claims obtained of the token
     */
    private Claims extractAllClaims(String token) throws Exception {        
        return Jwts.parserBuilder().setSigningKey(SECRET_KEY).build().parseClaimsJws(token).getBody();
    }
    
    /** 
     * Check if a token is expired with their internal expiration date
     * @param token Token to check if is
     * @return Boolean
     * @throws Exception
     */
    private Boolean isTokenExpired (String token) throws Exception {
        return extractExpiration(token).before(new Date());
    }
    
    /** 
     * Generation of a token
     * @param userDetails Details of the user to create the token for
     * @return String Token stringifyed and encrypted
     */
    public String generateToken (UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", userDetails.getAuthorities().toArray());        
        claims.put("user", userDetails.getUsername());
        return createToken(claims, userDetails.getUsername());
    }
    
    /** 
     * Token creation with the specified claims and subject (user username)
     * @param claims Claims data to add to the token
     * @param subject Variable information of who token is
     * @return String Token stringfyed and encrypted returned
     */
    private String createToken (Map<String,Object> claims, String subject) {
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + EXPIRE_TIME))
        .setIssuer(ISSUER).setNotBefore(new Date(System.currentTimeMillis()))
        .signWith(SECRET_KEY).compact();
    }
    
    /** 
     * Validation of the token
     * @param token Token to validate
     * @param userDetails User for who the token is validated
     * @return Boolean Is the token valid
     */
    public Boolean validateToken (String token, UserDetails userDetails) {
        try {
            final String username = extractUsername(token);
            final String issuer = extractIssuer(token);
            return (username.equals(userDetails.getUsername()) && ISSUER.equals(issuer) && !isTokenExpired(token));
        } catch (Exception e) {
            throw new BadCredentialsException("JWT is wrong .");
        }
    }
    
}
