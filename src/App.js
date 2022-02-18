import logo from './logo.svg';import './App.css';
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
        <header>
          {
            currentUser && 
          <>
            <NavLink activeClassName="my-active-class" to="/search">Search Movie</NavLink>
            <NavLink activeClassName="my-active-class" to="/watchlist">Watchlist Page</NavLink>
            <button onClick={handleLogout}>Logout</button>
          </>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                currentUser
                  ? <Redirect to="/search" />
                  : <AuthPage setCurrentUser={setCurrentUser} />
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


