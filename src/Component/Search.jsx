import React from 'react'
import { useData } from '../Context/Context'

function Search() {
  const {query,setQuery,error,isLoading,setError} = useData();
  return (
   <>
    <section className='search-section'>
      <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
           <div>
             <input className='search-input' type="text" placeholder='Search here...' value={query} onChange={(e)=>setQuery(e.target.value)}/>
           </div>
        </form>
        <div className='card-error'>
          <p>{error && query?error.show && error.msg:""}</p>
        </div>
        <div className='loading'>
            <h3>{isLoading?"loading....":""}</h3>
        </div>
        <div className='loading'>
            <h3>{!query?"Search Your favourite....":""}</h3>
        </div>
    </section>
   </>
    )
}

export default Search