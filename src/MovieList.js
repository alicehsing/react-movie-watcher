import React from 'react';
// import { useLocation } from 'react-router-dom';
import Movie from './Movie';
// import WatchListItem from './WatchListItem';

export default function MovieList({ movies }) {
//   const location = useLocation();
  
  return (
    <div className='movie-list'>
      {
        movies.map((movie, i) =>    
          <Movie key={movie.title + i} movie={movie} />
        )
      }
    </div>
  );
}
