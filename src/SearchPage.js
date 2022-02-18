import { useState } from 'react';
import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    const movie = await searchMovies(searchQuery);
    setResults(movie);
    console.log(movie);
  }
  
  // async function refreshWatchlist() {
  //   const myWatchList = await getWatchList();
  // }
  return (
    <div className='search-list'>
      <form onSubmit={handleSearch}>
        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <section>
        Your Find:
        <MovieList movies={results} />
      </section>

    </div>
  );
}
