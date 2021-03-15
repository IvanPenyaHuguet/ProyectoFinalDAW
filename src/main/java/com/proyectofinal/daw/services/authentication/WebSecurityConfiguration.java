package com.proyectofinal.daw.services.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


/**
 * dzone
 */
// @Configuration
// @Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter{
    
    @Autowired
    private UserDetailsService userDetailsService;  
    
    protected void configure(HttpSecurity httpSecurity) throws Exception{    
        httpSecurity.csrf().disable().authorizeRequests()
                    .antMatchers("/").permitAll()
                    .antMatchers(HttpMethod.POST,"/signup").permitAll() // Temporal
                    .antMatchers(HttpMethod.POST, "/api/**").authenticated()
                    .antMatchers("/api/**").hasRole("TECH")
                    .antMatchers("/api/auth/**").hasRole("ADMIN")
                    .and().formLogin().loginPage("/").defaultSuccessUrl("/home").loginProcessingUrl("/login").permitAll()
                    .and().logout().permitAll();
    }
    
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {         
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());     
    }


    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }    

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }
}