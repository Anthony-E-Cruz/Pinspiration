import React from "react";
import { AuthRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar_container'
import { Link, Switch, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ModalContainer from './modal/modal_container';
import ProfileContainer from './profile/profile_container';

const App = () => (
  <div className="outter-div">
    <header className="header">
      <Link to="/" className="header-link">
      <div className="logo_and_title">
        <img className="logo" src={window.logo} />
        <h1 className="logo-title" >Pinspiration</h1>
      </div>
      </Link>
      <NavBar />
    </header>
    {/* <ModalContainer /> */}
    <Switch>  
      {/* <AuthRoute exact path="/:username" component={ProfileContainer} /> */}
      <AuthRoute exact path="/" component={LogInFormContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <Route path="/" component */}
    </Switch>
  </div>
);

export default App;