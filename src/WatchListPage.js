import { useState } from 'react';
import MovieList from './MovieList';

export default function WatchListPage() {
  const [movies, setMovies] = useState([]);

//   async function refreshWatchlist() {
//       const myWatchList = await getWatchList();
//   }
  return (
    <div>
      <h2>My Watchlist</h2>
      <MovieList movies={movies} />

    </div>
  );
}
