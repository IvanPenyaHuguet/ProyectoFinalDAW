package com.proyectofinal.daw.services;

import java.util.Date;
import java.util.Optional;

import com.proyectofinal.daw.entities.Commentary;
import com.proyectofinal.daw.entities.Reagent;
import com.proyectofinal.daw.entities.User;
import com.proyectofinal.daw.entities.dto.NewCommendaryDTO;
import com.proyectofinal.daw.exceptions.ReagentNotFoundException;
import com.proyectofinal.daw.repositories.CommentaryRepository;
import com.proyectofinal.daw.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentaryService {

    @Autowired
    CommentaryRepository commentRepo;

    @Autowired
    ReagentService reagentService;

    @Autowired
    UserRepository userRepo;

    public Commentary saveCommentary(NewCommendaryDTO newCommentaryDTO) {

        Commentary commentary = new Commentary();

        Optional <Reagent> reagent = reagentService.findById(newCommentaryDTO.getId());
        Optional <User> user = userRepo.findByUsername(newCommentaryDTO.getUser());

        if (reagent.isPresent() && user.isPresent()) {
            commentary.setReagent(reagent.get());
            commentary.setCommentary(newCommentaryDTO.getCommentary());
            commentary.setCreationDate(new Date());
            commentary.setUser(user.get());
            commentRepo.save(commentary);
        }
        else {
            throw new ReagentNotFoundException(newCommentaryDTO.getId());
        }      
        return commentary;
    }
    
}
