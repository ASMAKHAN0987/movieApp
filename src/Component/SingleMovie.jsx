import React,{useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {API_URL} from '../Context/Context.jsx'
function SingleMovie() {
  const {id} = useParams();
  const [isLoading,setIsLoading] = useState(true);
  const [movie,setMovie] = useState("")
  const getMovies = async (URL)=>{
    try{
         const response = await fetch(URL);
         const responseData = await response.json();
         console.log(responseData);
         if(responseData.Response === 'True'){
          setIsLoading(false);
             setMovie(responseData);
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
  // let timerOut = setTimeout(()=>{
    getMovies(`${API_URL}&i=${id}`);
  // },800)
  // console.log();
  // return ()=>clearTimeout(timerOut);
},[id])
  if(isLoading){
    return (
      <div className='movie-section'>
        <div className='loading'>
        loading....
        </div>
        </div>
    )
  }
  return (
    <>
      <section className='movie-section'>
         <div className='movie-card'>
           <figure>
              <img src={movie.Poster} alt="" />
           </figure>
           <div className='card-content'>
             <p className='title'>{movie.Title}</p>
             <p className='card-text'>{movie.Released}</p>
             <p className='card-text'>{movie.Genre}</p>
             <p className='card-text'>{movie.imdbRating}</p>
             <p className='card-text'>{movie.Country}</p>
             <NavLink to={'/'} className= "back-btn">Go Back</NavLink>
           </div>
         </div>
      </section>
    </>
  )
}

export default SingleMovie