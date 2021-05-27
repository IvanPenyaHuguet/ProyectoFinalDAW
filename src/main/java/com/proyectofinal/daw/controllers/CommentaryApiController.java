package com.proyectofinal.daw.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

import com.proyectofinal.daw.entities.Commentary;
import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.entities.dto.NewCommendaryDTO;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.repositories.CommentaryRepository;
import com.proyectofinal.daw.services.CommentaryService;
import com.proyectofinal.daw.services.ReagentService;



/**
 * Api controller for commentaries
 */
@RestController
public class CommentaryApiController implements BaseApiController {
        

    @Autowired
    CommentaryRepository commentRepo;

    @Autowired
    CommentaryService commentService;

    @Autowired
    ReagentService reagentService;

    
    /** 
     * Method of the controller to return all commentaries of a reagent
     * @return List<Commentary> All 
     */
    @PostMapping("/commentary")              
    public List<Commentary> getAll(@RequestBody Map<String, Long> params) { 
        Reagent reagent = reagentService.findById(params.get("id")).orElseThrow(() -> new ReagentNotFoundException(params.get("id")));
        return commentRepo.findByReagent(reagent);
    }

    /** 
     * Method of the controller to save a commentary to a reagent
     * @return Commentary saved
     */
    @PutMapping("/commentary")              
    public Commentary getAll(@RequestBody NewCommendaryDTO newCommentaryDTO) { 
       
        return commentService.saveCommentary(newCommentaryDTO);
    }

}
