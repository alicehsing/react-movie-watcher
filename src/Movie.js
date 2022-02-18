import React from 'react';

export default function Movie({ movie }) {
  return (
    <div className='movie-item'>
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
      <p>
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : `https://placekitten.com/200/300`} />;
      </p>
    </div>
  );
}
