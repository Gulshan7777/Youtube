import React, { createContext, useEffect, useState } from 'react'
import { fetchData } from '../utils/api';

export const Context = createContext();

export const AppContext=({children})=>{
    const [loading,setLoading]=useState(false);
    const [searchResult,setSearchResult]=useState([]);
    const [selectCategory,setSelectCategory]=useState("New");
    const [mobileMenu,setMobileMenu]=useState(false);

    useEffect(()=>{
        fetchSelectedCategory(selectCategory)
    },[selectCategory])

    const fetchSelectedCategory=(query)=>{
        setLoading(true);
        fetchData(`search/?q=${query}`).then((res)=>{
            console.log(res.contents);
            setSearchResult(res.contents)
            setLoading(false);
        })
    }

    return (
        <Context.Provider value={{
            loading,setLoading,searchResult,selectCategory,setSelectCategory,mobileMenu,setMobileMenu
        }}>
            {children}
        </Context.Provider>
    )
}