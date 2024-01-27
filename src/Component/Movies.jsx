import React from 'react'
import { useData } from '../Context/Context'
import { NavLink } from 'react-router-dom';


function Movies() {
  const {movie,isLoading} = useData();
  return (
    <>
    <section className='movie-page container'>
     <div className="grid grid-4-col">
      {
      movie?(movie.map((currMov)=> {
        const {imdbID,Title,Poster} = currMov;
        let movieName = Title.substring(0,15);
        movieName =  movieName.length>14?movieName+"...":movieName;
        return(
          <NavLink  to={`movie/${imdbID}`} key={imdbID}>
             <div className='card'>
              <div className='card-info'>
                 <h2>{movieName}</h2>
                 <img src={Poster} alt={imdbID} />
              </div>
             </div>
          </NavLink>
        )
      })):""}
     </div>
    </section>
    </>
    )}
export default Movies