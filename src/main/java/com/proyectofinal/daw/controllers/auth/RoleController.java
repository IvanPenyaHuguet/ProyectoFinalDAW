package com.proyectofinal.daw.controllers.auth;
import java.util.List;

import com.proyectofinal.daw.controllers.BaseApiController;
import com.proyectofinal.daw.entities.Role;
import com.proyectofinal.daw.services.RoleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Api controller for manage roles
 */
@RestController
@PreAuthorize("hasRole('ROLE_ADD_ROLES')")
@RequestMapping("/api/auth")
public class RoleController implements BaseApiController {

    @Autowired
    RoleService roleService;    

    /**
     * Api for get all roles    
     */
    @GetMapping("/role")
    public ResponseEntity<List<Role>> getAll() {
        return new ResponseEntity<List<Role>>(roleService.getAll(), HttpStatus.OK);       
    }
}
