import { useState } from 'react';
import MovieList from './MovieList';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

 
  return (
    <div className='search-list'>
      <form>
        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <section>
        Your Find:
        <MovieList />
      </section>

    </div>
  );
}
