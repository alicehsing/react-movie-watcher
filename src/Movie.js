import React from 'react';
import { addToWatchList } from './services/fetch-utils';

export default function Movie({ movie, isOnWatchList, refreshWatchlist }) {
  const haveWatched = isOnWatchList(movie.id);

  async function handleClick() {
    if (!haveWatched) {
      const watchlistItem = {
        title: movie.title,
        api_id: movie.id,
        description: movie.overview,
        poster_img: movie.poster_path,
        release_date: movie.release_date,
      };

      await addToWatchList(watchlistItem);
      await refreshWatchlist();
    }
  }

  return (
    <div 
      onClick={handleClick} 
      title="movie-item"
      className={`movie-item ${haveWatched ? 'watched' : ''}`}>

      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
      <p>{movie.overview}</p>
      <p>
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : `https://placekitten.com/200/300`} />;
      </p>
    </div>
  );
}
