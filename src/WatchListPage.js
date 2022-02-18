import { useState } from 'react';
import MovieList from './MovieList';

export default function WatchListPage() {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <h2>My Watchlist</h2>
      <MovieList />

    </div>
  );
}
