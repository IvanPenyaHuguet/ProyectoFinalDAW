package com.proyectofinal.daw.exceptions;

 public class ReagentNotFoundException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public ReagentNotFoundException(Long id) {
      super("Could not find reagent " + id);
    }
  }
