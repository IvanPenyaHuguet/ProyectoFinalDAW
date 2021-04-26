package com.proyectofinal.daw.exceptions.advices;

import com.proyectofinal.daw.exceptions.ReagentNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


/**
 * Response status to send in case of the exception reagent not found is thrown
 */
@ControllerAdvice
public class ReagentNotFoundAdvice {
    
    /** 
     * @param e Error message generated on the exception
     * @return String Of the error message generated
     */
    @ResponseBody
    @ExceptionHandler(ReagentNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String reagentNotFoundHandler(ReagentNotFoundException e) {
        return e.getMessage();
    }
}
