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
        <Link className="signup-btn" to="/login">Log In</Link>
        <Link className="login-btn" to="/signup">Sign Up</Link>
      </div>
    )
  }
};

export default navBar;