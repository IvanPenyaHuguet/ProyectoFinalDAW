package com.proyectofinal.daw.entities.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.proyectofinal.daw.entities.Commentary;
import com.proyectofinal.daw.entities.Element;
import com.proyectofinal.daw.entities.Location;

import com.proyectofinal.daw.entities.User;

public class NewReagentDTO implements Serializable{
    
    private static final long serialVersionUID = 1L;
    public static final String INORGANIC_REAGENT = "Inorganic";
    public static final String ORGANIC_REAGENT = "Organic";

    
    private long id;    
    private String spanishName;    
    private String englishName;    
    private String internalReference;   
    private int quantity;  
    private String formula;    
    private List<Commentary> commentary;    

    private float molecularWeight;    
    private Date entryDate; 
    private String cas;    
    private List<Element> elements;   
    private User userBuyer;        
    private Location location;
    private String reagentType;


    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSpanishName() {
        return this.spanishName;
    }

    public void setSpanishName(String spanishName) {
        this.spanishName = spanishName;
    }

    public String getEnglishName() {
        return this.englishName;
    }

    public void setEnglishName(String englishName) {
        this.englishName = englishName;
    }

    public String getInternalReference() {
        return this.internalReference;
    }

    public void setInternalReference(String internalReference) {
        this.internalReference = internalReference;
    }

    public int getQuantity() {
        return this.quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getFormula() {
        return this.formula;
    }

    public void setFormula(String formula) {
        this.formula = formula;
    }

    public List<Commentary> getCommentary() {
        return this.commentary;
    }

    public void setCommentary(List<Commentary> commentary) {
        this.commentary = commentary;
    }
   

    public float getMolecularWeight() {
        return this.molecularWeight;
    }

    public void setMolecularWeight(float molecularWeight) {
        this.molecularWeight = molecularWeight;
    }

    public Date getEntryDate() {
        return this.entryDate;
    }

    public void setEntryDate(Date entryDate) {
        this.entryDate = entryDate;
    }

    public String getCas() {
        return this.cas;
    }

    public void setCas(String cas) {
        this.cas = cas;
    }

    public List<Element> getElements() {
        return this.elements;
    }

    public void setElements(List<Element> elements) {
        this.elements = elements;
    }

    public User getUserBuyer() {
        return this.userBuyer;
    }

    public void setUserBuyer(User userBuyer) {
        this.userBuyer = userBuyer;
    }

    public Location getLocation() {
        return this.location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public String getReagentType() {
        return this.reagentType;
    }

    public void setReagentType(String reagentType) {
        this.reagentType = reagentType;
    }

    


}
