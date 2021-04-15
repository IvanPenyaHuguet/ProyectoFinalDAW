package com.proyectofinal.daw.entities.dto;

/**
 * DTO Object for getting the log information from client
 */
public class ClientLogDTO {    
    
    private String level;
    private String message;   
    private String usuario;
    
    
    /** 
     * @return String
     */
    public String getLevel() {
        return this.level;
    }

    
    /** 
     * @param level
     */
    public void setLevel(String level) {
        this.level = level;
    }

    
    /** 
     * @return String
     */
    public String getMessage() {
        return this.message;
    }

    
    /** 
     * @param message
     */
    public void setMessage(String message) {
        this.message = message;
    }

    
    /** 
     * @return String
     */
    public String getUsuario() {
        return this.usuario;
    }

    
    /** 
     * @param usuario
     */
    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

}
