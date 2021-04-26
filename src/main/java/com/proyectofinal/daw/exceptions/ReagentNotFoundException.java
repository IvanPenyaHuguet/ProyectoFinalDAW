package com.proyectofinal.daw.exceptions;


/**
 * Custom exception in case of location not found
 */
public class ReagentNotFoundException extends RuntimeException {

  /**
   *
   */
  private static final long serialVersionUID = 1L;

  /**
   * 
   * @param id Id of the reagent not found
   */
  public ReagentNotFoundException(Long id) {
    super("Could not find reagent " + id);
  }
}
