import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { getWatchList } from './services/fetch-utils';

export default function WatchListPage() {
  const [movies, setMovies] = useState([]);

  async function refreshWatchlist() {
    const myWatchList = await getWatchList();
    setMovies(myWatchList);
  }

  useEffect(() => {
    refreshWatchlist();
  }, []);

  return (
    <div>
      <h2>My Watchlist</h2>
      <MovieList movies={movies} refreshWatchlist={refreshWatchlist} />
    </div>
  );
}
