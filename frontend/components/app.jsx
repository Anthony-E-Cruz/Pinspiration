import React from "react";
import { AuthRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar_container'
import { Link } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';


const App = () => (
  <div>
    <header className="header">
      <h1>Pinspiration</h1>
      <NavBar />
    </header>

    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;