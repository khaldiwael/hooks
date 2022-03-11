import React from 'react'
import MovieCard from './movieCard';
function ListMovies({movies}) {
  return (
    <div>
        {movies.map((movie)=><MovieCard movie={movie}/>)}
    </div>
  )
}
export default ListMovies;