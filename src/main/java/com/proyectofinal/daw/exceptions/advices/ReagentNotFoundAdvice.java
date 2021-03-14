package com.proyectofinal.daw.exceptions.advices;

import com.proyectofinal.daw.exceptions.ReagentNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ReagentNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(ReagentNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String reagentNotFoundHandler(ReagentNotFoundException e) {
        return e.getMessage();
    }
}
