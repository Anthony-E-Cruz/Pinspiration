import React from "react";
import { AuthRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar_container'
import { Switch, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ProfileBoardsContainer from "./board/board_profile_show";
import ProfilePinsContainer from "./profile/profile_container";
import ProfileEditContainer from './profile/profile_edit_container';
import PinIndexContainer from './pin_show/pin_index_container'
import PinCreateContainer from './pin_show/pin_create_container'
import PinShowContainer from './pin_show/pin_show_container'
import BoardShowContainer from './board/board_show_container'
import BoardIndexContainer from './board/board_index_container'
import BoardCreateContainer from './board/board_create_container'

const App = () => (
  <div className="outter-div">
    <div className="header-container">
      <NavBar />
    </div>
    <div className="switch">
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/" component={PinIndexContainer} />
        <Route exact path="/users/:userId/pins" component={ProfilePinsContainer} />
        <Route exact path="/users/:userId/boards" component={ProfileBoardsContainer} />
        <Route exact path="/:userId/edit" component={ProfileEditContainer} />
        <Route exact path="/pins/:pinId" component={PinShowContainer} />
        <Route exact path="/pin/new" component={PinCreateContainer} />
        <Route exact path="/boards/index" component={BoardIndexContainer} />
        <Route exact path="/boards/:boardId" component={BoardShowContainer} />
        <Route exact path="/board/new" component={BoardCreateContainer} />
      </Switch>
    </div>
  </div>
);

export default App;