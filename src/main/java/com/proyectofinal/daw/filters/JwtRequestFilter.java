package com.proyectofinal.daw.filters;

import java.io.IOException;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.proyectofinal.daw.services.authentication.JwtUtil;
import com.proyectofinal.daw.services.authentication.UserAuthenticationDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;


/**
 * Filter component that checks if a request has a valid jwt
 */
@Component
public class JwtRequestFilter extends OncePerRequestFilter{

    @Autowired
    private UserAuthenticationDetails userAuthenticationDetails;

    @Autowired
    private JwtUtil jwtUtil; 

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
        final String authorizationHeader = request.getHeader("Authorization");
        String username = null;
        String jwt = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
        }
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userAuthenticationDetails.loadUserByUsername(username);
            if (jwtUtil.validateToken(jwt, userDetails)) {
                List <GrantedAuthority> authorities = jwtUtil.extractRole(jwt);
               UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, authorities);
               usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
               SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        } 
         
        } catch (Exception e) {           
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);                          
        } 
        filterChain.doFilter(request, response);      
    }
    
}
