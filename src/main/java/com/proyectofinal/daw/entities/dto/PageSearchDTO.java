package com.proyectofinal.daw.entities.dto;

import java.util.List;

public class PageSearchDTO<T> {   

    List <T> searchList;
    long totalCount;


    public PageSearchDTO(List<T> searchList, long totalCount) {
        this.searchList = searchList;
        this.totalCount = totalCount;
    }

    public PageSearchDTO() {
    }

    
    /** 
     * @return List<T>
     */
    public List<T> getSearchList() {
        return this.searchList;
    }

    
    /** 
     * @param searchList
     */
    public void setSearchList(List<T> searchList) {
        this.searchList = searchList;
    }

    
    /** 
     * @return long
     */
    public long getTotalCount() {
        return this.totalCount;
    }

    
    /** 
     * @param totalCount
     */
    public void setTotalCount(long totalCount) {
        this.totalCount = totalCount;
    }
    
}
