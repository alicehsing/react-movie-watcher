import React, { useState } from 'react';
import { signInUser, signUpUser } from './services/fetch-utils';


export default function AuthPage({ setCurrentUser }) {
//states that need to track
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function clearForm() {
    setEmail('');
    setPassword('');
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signInUser(email, password);
    //set the user in App.js state using the correct prop callback
    setCurrentUser(user);
    clearForm();
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUpUser(email, password);
    setCurrentUser(user);
    clearForm();
  }
  
  return (
    <div className='auth-page'>
      <h1><em>JustWatch - a service that lets you keep track of watched movies with ease. </em></h1>
      <form>
        <label>
            Email
          <input value={email} required type="email" name="email" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
            Password
          <input value={password} required type="password" name="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleSignIn}>Sign In</button>
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
