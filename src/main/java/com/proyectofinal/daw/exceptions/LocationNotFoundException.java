package com.proyectofinal.daw.exceptions;

/**
 * Response status to send in case of the exception location not found is thrown
 */
public class LocationNotFoundException extends RuntimeException {

  /**
   *
   */
  private static final long serialVersionUID = 1L;

  /**
   * 
   * @param id Id of location not found
   */
  public LocationNotFoundException(Long id) {
    super("Could not findLocation " + id);
  }
}
