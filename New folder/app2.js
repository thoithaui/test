import React, { useState } from 'react';
import authService from './services/authService';

function App() {
  const [loggedIn, setLoggedIn] = useState(authService.isAuthenticated());

  const handleLogin = () => {
    // Simulate a successful login
    const token = 'your_token_here';
    const accountInfo = { username: 'example_user' };
    authService.setAuth(token, accountInfo);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    authService.logout();
    setLoggedIn(false); 
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {authService.getAccountInfo().username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
