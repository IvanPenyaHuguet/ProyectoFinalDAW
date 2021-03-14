package com.proyectofinal.daw.exceptions;

public class LocationNotFoundException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    public LocationNotFoundException(Long id) {
        super("Could not findLocation " + id);
      }
}
