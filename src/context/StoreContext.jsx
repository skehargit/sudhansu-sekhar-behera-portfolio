import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{
  const url = "https://sekharportfoliobackend.onrender.com/api/portfolio";
  const [projectlist,setProjectlist]= useState([]);
  const [featuredProjects,setFeaturedProjects] = useState([]);
  const [loading,setLoading]=useState(false)
  const fetching = async()=>{
    try {
      setLoading(true);
      const resprojects = await axios.get(`${url}/projectlist`);
      const resfeaturedProjects = await axios.get(`${url}/featuredprojectslist`);
      setProjectlist(resprojects.data.data);
      setFeaturedProjects(resfeaturedProjects.data.data);
      
      setLoading(false);
    } catch (error) {
      console.log("Error while fething data",error);
    }
  }
  useEffect(()=>{
    fetching();
  },[])
    
    const contextValue={
        projectlist,
        featuredProjects,
        loading,
        setLoading
    }
    return <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
}
export default StoreContextProvider;