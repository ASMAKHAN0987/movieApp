import React,{useContext,createContext, useEffect, useState} from "react";
export const API_URL = `https://www.omdbapi.com/?apikey=d336dbae`;
const AppContext = createContext()
const AppContextProvider = ({children})=>{
  const [isLoading,setIsLoading] = useState(true);
  const [movie,setMovie] = useState()
  const [error,setError] = useState({show:"false",msg:""});
  const [query,setQuery] = useState("titanic");
  const getMovies = async (URL)=>{
    try{
         const response = await fetch(URL);
         const responseData = await response.json();
         console.log(responseData);
         if(responseData.Response === 'True'){
          setIsLoading(false);
             setMovie(responseData.Search);
             setError({
              show:"false",
              msg:""
            })
         }else{
          setError({
            show:"true",
            msg:responseData.Error
          })
          setMovie("");
         }
    }catch(error){
        console.log(error);
    }
}
useEffect(() => {
  let timerOut = setTimeout(()=>{
    if(query){
    getMovies(`${API_URL}&s=${query}`);}
  },800)
  return ()=>clearTimeout(timerOut);
}, [query])
  return <AppContext.Provider value={{error,isLoading,movie,query,setQuery}}>{children}</AppContext.Provider>
}
const useData = ()=>{
    return useContext(AppContext);
}
export {AppContext,AppContextProvider,useData}

