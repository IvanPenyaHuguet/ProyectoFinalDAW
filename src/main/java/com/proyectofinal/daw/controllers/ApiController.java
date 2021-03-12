package com.proyectofinal.daw.controllers;


import java.util.List;

import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.repositories.ReagentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class ApiController implements BaseApiController{
    
    @Autowired
    ReagentRepository reagentRepo;

    @GetMapping("/getAllReagents")
    @ResponseBody       
    public List<Reagent> getAllReagents() {       
       
        List<Reagent> allReagents = (List<Reagent>) reagentRepo.findAll();        
        return allReagents;
    }

    // @GetMapping("/anadirLibros")
    // @ResponseBody       
    // public String addLibros() {       
        
    //     Libro newLibro = new Libro ();
    //     newLibro.setTitulo("DonQuijote2");
    //     newLibro.setAno(1971);
    //     repoLibro.save(newLibro);
        
    //     return "Añadir";
    // }

}
