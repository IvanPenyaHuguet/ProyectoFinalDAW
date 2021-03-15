package com.proyectofinal.daw.services.authentication;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.security.core.userdetails.User;

/**
 * dzone
 */
// @Configuration
// @Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter{
    
    @Autowired
    private UserDetailsService userDetailsService;
    
    // private static final String[] AUTH_WHITELIST = {
    //         "/index",            
    // };
    // @Autowired
    // private DataSource dataSource;

    // public WebSecurityConfiguration(UserDetailsService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder)  {
    //     this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    //     this.userDetailsService = userDetailsService;
    // }

    protected void configure(HttpSecurity httpSecurity) throws Exception{
    //   httpSecurity.cors().and().csrf().disable().authorizeRequests()
    //             .antMatchers(AUTH_WHITELIST).permitAll()
    //             .antMatchers(HttpMethod.POST, "/signup").permitAll()
    //             .anyRequest().authenticated()
    //             .and().addFilter(new AuthenticationFilter(authenticationManager()))
    //             .addFilter(new AuthorizationFilter(authenticationManager()))
    //             .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        httpSecurity.csrf().disable().authorizeRequests()
                    .antMatchers("/").permitAll()
                    .antMatchers(HttpMethod.POST,"/signup").permitAll() // Temporal
                    .antMatchers(HttpMethod.POST, "/api/**").authenticated()
                    .antMatchers("/api/**").hasRole("TECH")
                    .antMatchers("/api/auth/**").hasRole("ADMIN")
                    .and().formLogin().loginPage("/").defaultSuccessUrl("/home").loginProcessingUrl("/login").permitAll()
                    .and().logout().permitAll();
    }

    // public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception{
    //     authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    // }
    // @Autowired
    // public void configureGlobal(AuthenticationManagerBuilder auth)
    // throws Exception {
    //     auth.jdbcAuthentication()
    //     .dataSource(dataSource)
    //     .withDefaultSchema()
    //     .withUser(User.withUsername("username")
    //             .password(passwordEncoder().encode("password"))
    //             .roles("ADMIN"));
    // }
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {         
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());     
    }


    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    // @Bean
    // public AuthenticationFilter getJWTAuthenticationFilter() {
    //     final JWTAuthenticationFilter filter = new JWTAuthenticationFilter(authenticationManager());
    //     filter.setFilterProcessesUrl("/api/auth/login");
    //     return filter;
    // }

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }
}