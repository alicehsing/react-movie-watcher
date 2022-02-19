import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { searchMovies, getWatchList } from './services/fetch-utils';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    const movie = await searchMovies(searchQuery);
    setResults(movie);
    console.log(movie);
  }
  
  async function refreshWatchlist() {
    const myWatchList = await getWatchList();
    setWatchlist(myWatchList);
  }

  useEffect(() => {
    refreshWatchlist();
  }, []);

  function isOnWatchList(api_id) {
    const match = watchlist.find(item => Number(item.api_id) === Number(api_id));
    return Boolean(match);
  }

  return (
    <div className='search-list'>
      <h2><em>Search and add movie to your watch list!</em></h2>
      <form onSubmit={handleSearch}>
        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <section>
    
        <MovieList movies={results} isOnWatchList={isOnWatchList} refreshWatchlist={refreshWatchlist}/>
      </section>

    </div>
  );
}
