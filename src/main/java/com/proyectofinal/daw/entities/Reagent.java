package com.proyectofinal.daw.entities;


import java.io.Serializable;
import java.util.Calendar;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeInfo.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.search.engine.backend.types.Projectable;
import org.hibernate.search.engine.backend.types.Sortable;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.GenericField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.IndexedEmbedded;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.KeywordField;



/**
 * Model representation of a reagent
 */
@Entity
// @MappedSuperclass
@Table
@Inheritance(strategy=InheritanceType.SINGLE_TABLE) //(Una sola tabla con todos los campos adicionales de hijos)
// @Inheritance(strategy = InheritanceType.JOINED) //(Una tabla con los campos en comun y otras tablas con los campos diferentes)
//@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS) // Una table por cada clase, parecido a @MappedSuperClass
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING, name = "reagentType")
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = As.PROPERTY, property = "reagentType", visible=true)
@JsonSubTypes({
    @JsonSubTypes.Type(value = InorganicReagent.class, name = "Inorganic"),
    @JsonSubTypes.Type(value = OrganicReagent.class, name = "Organic")
})
@JsonIgnoreProperties({"reagents", "standards", "reagent"})
@Indexed
public abstract class Reagent implements Serializable, Compound {
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;    
    @Column(unique = true, nullable = false)
    @FullTextField( analyzer= "spanish", projectable = Projectable.YES)
    @KeywordField(name = "spanishName_sort", normalizer = "spanish", sortable = Sortable.YES)
    private String spanishName;
    @FullTextField ( analyzer = "english")
    private String englishName;
    @Column(nullable = false, unique=true)
    @KeywordField
    private String internalReference;   
    @ColumnDefault("1") 
    private int quantity;  
    private String formula;
    @OneToMany(mappedBy = "reagent", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("reagent")
    private List<Commentary> commentary;    
    @OneToMany(mappedBy = "reagent") 
    @IndexedEmbedded  (includeDepth = 2 )
    private List<ReagentSuppplier> suppliers;
    private float molecularWeight;
    @Basic
    @Temporal(TemporalType.DATE)
    @GenericField
    private Calendar entryDate;  
    @FullTextField 
    private String cas;
    @ManyToMany(mappedBy = "reagents")    
    @IndexedEmbedded(includeEmbeddedObjectId = true)
    private List<Element> elements;    
    private User userBuyer;
    @ManyToOne() 
    @JoinColumn(name = "location_id")      
    private Location location; 
    @Column(name="reagentType", insertable = false, updatable = false)
    protected String reagentType;

    public String getReagentType() {
        return this.reagentType;
    }    

    public Location getLocation() {
        return this.location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public User getUserBuyer() {
        return this.userBuyer;
    }

    public void setUserBuyer(User userBuyer) {
        this.userBuyer = userBuyer;
    }  

    public List<Element> getElements() {
        return this.elements;
    }

    public void setElements(List<Element> elements) {
        this.elements = elements;
    }


    public String getCas() {
        return this.cas;
    }

    public void setCas(String cas) {
        this.cas = cas;
    }

    public List<Commentary> getCommentary() {
        return this.commentary;
    }

    public void setCommentary(List<Commentary> commentary) {
        this.commentary = commentary;
    }
    
    /** 
     * @return long
     */
    public long getId() {
        return this.id;
    }

    
    /** 
     * @param id
     */
    public void setId(long id) {
        this.id = id;
    }

    
    /** 
     * @return String
     */
    public String getSpanishName() {
        return this.spanishName;
    }

    
    /** 
     * @param spanishName
     */
    public void setSpanishName(String spanishName) {
        this.spanishName = spanishName;
    }

    
    /** 
     * @return String
     */
    public String getEnglishName() {
        return this.englishName;
    }

    
    /** 
     * @param englishName
     */
    public void setEnglishName(String englishName) {
        this.englishName = englishName;
    }

    
    /** 
     * @return String
     */
    public String getInternalReference() {
        return this.internalReference;
    }

    
    /** 
     * @param internalReference
     */
    public void setInternalReference(String internalReference) {
        this.internalReference = internalReference;
    }

    
    /** 
     * @return int
     */
    public int getQuantity() {
        return this.quantity;
    }

    
    /** 
     * @param quantity
     */
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    
    /** 
     * @return String
     */
    public String getFormula() {
        return this.formula;
    }

    
    /** 
     * @param formula
     */
    public void setFormula(String formula) {
        this.formula = formula;
    }   

    
    /** 
     * @return float
     */
    public float getMolecularWeight() {
        return this.molecularWeight;
    }

    
    /** 
     * @param molecularWeight
     */
    public void setMolecularWeight(float molecularWeight) {
        this.molecularWeight = molecularWeight;
    }

    
    /** 
     * @return Calendar
     */
    public Calendar getEntryDate() {
        return this.entryDate;
    }

    
    /** 
     * @param entryDate
     */
    public void setEntryDate(Calendar entryDate) {
        this.entryDate = entryDate;
    }
    
    public List<ReagentSuppplier> getSuppliers() {
        return this.suppliers;
    }

    public void setSuppliers(List<ReagentSuppplier> suppliers) {
        this.suppliers = suppliers;
    }
   
}
