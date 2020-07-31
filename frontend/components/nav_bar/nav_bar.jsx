import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, logout, openModal }) => {
  if (currentUser) {
    return (
      <div>
        <Link to="/">
          <button className="signup-btn" onClick={logout}>Logout</button> 
        </Link>
        <Link className="login-btn" to={`/${currentUser.username}`}>Profile</Link>
        {/* <p className="login-btn">user</p>  */}
      </div>
    )
  } else {
    return (
      <div className="btns">
        <Link className="login-btn" to="/login">Log in</Link>
        <Link className="signup-btn" to="/signup">Sign up</Link>
        {/* <Link className="login-btn" to={() => openModal('login')}>Log in</Link>
        <Link className="signup-btn" to={() => openModal('signup')}>Sign up</Link> */}
      </div>
    )
  }
};

export default navBar;