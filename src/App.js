import './App.css';
import { useState } from 'react';
import { 
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { logout } from './services/fetch-utils';
import AuthPage from './AuthPage';
import WatchListPage from './WatchListPage';
import SearchPage from './SearchPage';


export default function App() {
  //set the initial state of the user to come from localStorage, which is where supabase puts the token
  //then we don't have to worry about losing our token state in react and ending with localStorage
  //and our react state getting out of sync
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  async function handleLogout() {
    await logout();
    setCurrentUser('');
  }

  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          {
            currentUser && 
            <><button onClick={handleLogout}>Logout</button>
              <NavLink activeClassName="my-active-class" to="/search">Search Movie</NavLink><NavLink activeClassName="my-active-class" to="/watchlist">Watchlist Page</NavLink></>         
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                currentUser
                  ? <Redirect to="/watchlist" />
                  : <AuthPage setCurrentUser={setCurrentUser} />
              }
            </Route>
            <Route exact path="/watchlist">
              {
                !currentUser
                  ? <Redirect to="/" />
                  : <WatchListPage />
              }
            </Route>
            <Route exact path="/search">
              {
                !currentUser
                  ? <Redirect to="/" />
                  : <SearchPage />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
    
  );
}


