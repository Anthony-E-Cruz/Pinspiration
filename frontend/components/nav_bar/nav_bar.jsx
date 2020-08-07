import React from 'react';
// import { fasfaChvronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, logout, openModal }) => {
  if (currentUser) {
    return (
      <header className="header">
        <Link to="/" className="header-link">
          <div className="logo_and_title">
            <img className="logged-in-logo" src={window.logo} />
            <button className="home-bttn">Home</button>
          </div>
        </Link>
        <div className="header-icons-container">
          {/* <Link to="/">
            <button className="signup-btn" onClick={logout}>
              Logout
            </button>
          </Link> */}
          <Link
            className="header-profile-logo-link"
            to={`/users/${currentUser.id}/pins`}
          >
            <img className="logged-in-logo" src={window.github} />
          </Link>
          <Link
            className="header-profile-logo-link"
            to={`/users/${currentUser.id}/pins`}
          >
            <img className="header-profile-logo" src={window.profile_img} />
          </Link>
          {/* <button> */}
          <Link to={`/users/${currentUser.id}/pins`}>
            {/* <img className="dropdown-logo" src={window.dropdownlogo} /> */}
            {/* <i class="fas fa-chevron-down"></i> */}
          </Link>
          {/* <i class="fas fa-chevron-down"></i> */}
          <div className="dropdown-parent-nav">
            <FontAwesomeIcon className="dropdown-logo" icon={faChevronDown} />
            <Link className="dropdown-child-nav logout" to="/">
              <button className="logout-bttn-nav" onClick={logout}>
                Logout
              </button>
            </Link>
          </div>
          {/* </button> */}
          {/* <p className="login-btn">user</p>  */}
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="logo_and_title">
          <img className="logo" src={window.logo} />
          <h1 className="logo-title">Pinspiration</h1>
        </div>
        <div className="btns">
          <Link className="signup-btn" to="/signup">Sign up</Link>
          <Link className="login-btn" to="/login">Log in</Link>
        </div>
      </header>
    )
  }
};

export default navBar;