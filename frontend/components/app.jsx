import React from "react";
import { AuthRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar_container'
import { Link } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div className="outter-div">
    <ModalContainer />
    <header className="header">
      <div className="logo_and_title">
        <img className="logo" src={window.logo} />
        <h1 className="logo-title" >Pinspiration</h1>
      </div>
      <NavBar />
    </header>

    {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
  </div>
);

export default App;