import React from 'react';
import { watchMovie } from './services/fetch-utils';

export default function WatchListItem({ movie, refreshWatchlist }) {
  
  async function handleClick() {
    //on click, change the movie from not watched to watched
    await watchMovie(movie.id);
    await refreshWatchlist();
  }
  return (
    <div onClick={handleClick} className="movie-item watchlist-item">
      WatchListItem
      <h1>{movie.watched ? '✅' : '👀'}</h1>
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
      <p>{movie.description}</p>
      <p>
        <img src={movie.poster_img ? `https://image.tmdb.org/t/p/original${movie.poster_img}` : `https://placekitten.com/200/300`} />;
      </p>

    </div>
  );
}
