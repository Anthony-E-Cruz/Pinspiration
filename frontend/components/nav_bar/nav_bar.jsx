import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faAngellist,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, logout, openModal }) => {
  if (currentUser) {
    return (
      <header className="header">
        <Link to="/" className="header-link">
          <div className="logo_and_title">
            <img className="logged-in-logo" src={window.logo} />
            <button className="home-bttn signed-in">Home</button>
          </div>
        </Link>
        <div className="header-icons-container">
          <a
            target="_blank"
            className="site-links-anchor"
            href="https://github.com/Anthony-E-Cruz/Pinspiration"
          >
            <FontAwesomeIcon icon={faGithub} className="site-links" size="lg" />
          </a>
          <a
            target="_blank"
            className="site-links-anchor"
            href="https://www.linkedin.com/in/anthonyecruz/"
          >
            <FontAwesomeIcon className="site-links" icon={faLinkedin} size="lg" />
          </a>
          <a
            target="_blank"
            className="site-links-anchor"
            href="https://angel.co/u/anthony-cruz-13"
          >
            <FontAwesomeIcon icon={faAngellist} className="site-links" size="lg" />
          </a>
          <Link
            className="header-profile-logo-link"
            to={`/users/${currentUser.id}/pins`}
          >
            <img className="header-profile-logo" src={window.profile_img} />
          </Link>
          <Link to={`/users/${currentUser.id}/pins`}></Link>
          <div className="dropdown-parent-nav">
            <FontAwesomeIcon className="dropdown-logo" icon={faChevronDown} />
            <Link className="dropdown-child-nav logout" to="/">
              <button className="logout-bttn-nav" onClick={logout}>
                Logout
              </button>
            </Link>
          </div>
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
          <a
            target="_blank"
            className="site-links-anchor2"
            href="https://github.com/Anthony-E-Cruz/Pinspiration"
          >
            <FontAwesomeIcon icon={faGithub} className="site-links" size="lg" />
          </a>
          <a
            target="_blank"
            className="site-links-anchor2"
            href="https://www.linkedin.com/in/anthonyecruz/"
          >
            <FontAwesomeIcon className="site-links" icon={faLinkedin} size="lg" />
          </a>
          <a
            target="_blank"
            className="site-links-anchor2"
            href="https://angel.co/u/anthony-cruz-13"
          >
            <FontAwesomeIcon icon={faAngellist} className="site-links" size="lg" />
          </a>
          <Link className="login-btn" to="/login">Log in</Link>
          <Link className="signup-btn" to="/signup">Sign up</Link>
        </div>
      </header>
    )
  }
};

export default navBar;