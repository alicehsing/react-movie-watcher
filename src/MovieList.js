import React from 'react';
import { useLocation } from 'react-router-dom';
import Movie from './Movie';
import WatchListItem from './WatchListItem';

export default function MovieList({ movies, isOnWatchList, refreshWatchlist }) {
  const location = useLocation();
  
  return (
    <div className='movie-list'>
      {
        movies.map((movie, i) => location.pathname.includes('search')
          ? <Movie 
            key={movie.title + i} 
            movie={movie}
            isOnWatchList={isOnWatchList}
            refreshWatchlist={refreshWatchlist}/>
          : <WatchListItem
            key={movie.title + i} 
            movie={movie}
            refreshWatchlist={refreshWatchlist} />
        )
      }
    </div>
  );
}
