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

    public String extractUsername(String token) throws Exception{
        return extractClaim(token, Claims::getSubject);
    }
    public Date extractExpiration (String token) throws Exception {
        return extractClaim(token, Claims::getExpiration);
    }
    public String extractIssuer (String token) throws Exception {
        return extractClaim(token, Claims::getIssuer);
    }
    @SuppressWarnings (value="unchecked")
    public List<GrantedAuthority> extractRole (String token) throws Exception { 
        final Claims claims = extractAllClaims(token); 
        final List<Map<String,String>> roles =  claims.get("roles", List.class);        
        List<GrantedAuthority> rolesList = new ArrayList<>();
        for (Map<String, String> rol: roles) {
            rolesList.add(new SimpleGrantedAuthority(rol.get("authority")));
        }    
        //GrantedAuthority authority =  new SimpleGrantedAuthority("ROLE_" + roles.get("authority"));
        //rolesList.add(authority);
        return rolesList;        
    }
    public <T> T extractClaim(String token, Function<Claims,T> claimsResolver) throws Exception{
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private Claims extractAllClaims(String token) {        
        return Jwts.parserBuilder().setSigningKey(SECRET_KEY).build().parseClaimsJws(token).getBody();
    }
    private Boolean isTokenExpired (String token) throws Exception {
        return extractExpiration(token).before(new Date());
    }
    public String generateToken (UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", userDetails.getAuthorities().toArray());        
        claims.put("user", userDetails.getUsername());
        return createToken(claims, userDetails.getUsername());
    }
    private String createToken (Map<String,Object> claims, String subject) {
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + EXPIRE_TIME))
        .setIssuer(ISSUER).setNotBefore(new Date(System.currentTimeMillis()))
        .signWith(SECRET_KEY).compact();
    }
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
