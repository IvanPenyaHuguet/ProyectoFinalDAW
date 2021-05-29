package com.proyectofinal.daw.entities;

import java.util.Date;
import java.util.List;

public interface Compound {

    public long getId();    
    public void setId(long id);
    public String getName();
    public void setName(String name);
    public String getInternalReference();
    public void setInternalReference(String internalReference);
    public List<Supplier> getSuppliers();
    public void setSuppliers(List<Supplier> suppliers);
    public List<Element> getElements();
    public void setElements(List<Element> elements);
    public Date getEntryDate();
    public void setEntryDate(Date entryDate);
    
}
