import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{
  
  useEffect(()=>{
  },[])
    
    const contextValue={
       
    }
    return <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
}
export default StoreContextProvider;