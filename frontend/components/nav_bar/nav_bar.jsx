import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <button onClick={logout}>Logout</button>  
      </div>
    )
  } else {
    return (
      <div className="btns">
        <Link className="login-btn" to="/login">Log in</Link>
        <Link className="signup-btn" to="/signup">Sign up</Link>
      </div>
    )
  }
};

export default navBar;