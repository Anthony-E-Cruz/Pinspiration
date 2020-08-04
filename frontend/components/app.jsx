import React from "react";
import { AuthRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar_container'
import { Link, Switch, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ModalContainer from './modal/modal_container';
import ProfilePinsContainer from "./profile/profile_container";
import ProfileBoardsContainer from "./profile/profile_board_container";
import ProfileEditContainer from './profile/profile_edit_container';
import PinIndexContainer from './pin_show/pin_index_container'
import PinProfileShowContainer from "./pin_show/pin_profile_show_container";
import PinCreateContainer from './pin_show/pin_create_container'
import PinShowContainer from './pin_show/pin_show_container'
import BoardShowContainer from './board/board_show_container'
import BoardIndexContainer from './board/board_index_container'
import BoardCreateContainer from './board/board_create_container'

const App = () => (
  <div className="outter-div">
    <div className="header-container">
      <header className="header">
        <Link to="/" className="header-link">
          <div className="logo_and_title">
            <img className="logo" src={window.logo} />
            <h1 className="logo-title">Pinspiration</h1>
          </div>
        </Link>
        <NavBar />
      </header>
    </div>
    {/* <ModalContainer /> */}
    <div className="switch">
      <Switch>
        <Route exact path="/" component={PinIndexContainer} />
        {/* <AuthRoute exact path="/" component={LogInFormContainer} /> */}
        <Route exact path="/home" component={PinIndexContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route
          exact
          path="/users/:userId/pins"
          component={ProfilePinsContainer}
        />
        <Route
          exact
          path="/users/:userId/boards"
          component={ProfileBoardsContainer}
        />
        {/* <Route exact path="/:userId" component={ProfileContainer} /> */}
        {/* <Route exact path="/:userId" component={PinIndexContainer} /> */}
        <Route
          exact
          path="/users/:userId/edit"
          component={ProfileEditContainer}
        />
        <Route exact path="/:userId/edit" component={ProfileEditContainer} />
        {/* <Route exact path="/pins/:pinId" component={PinShowContainer} /> */}
        <Route exact path="/pins/:pinId" component={PinShowContainer} />
        <Route exact path="/pins/pins/:pinId" component={PinShowContainer} />
        <Route exact path="/pins" component={PinIndexContainer} />
        <Route exact path="/pin/new" component={PinCreateContainer} />
        <Route exact path="/boards/index" component={BoardIndexContainer} />
        <Route exact path="/boards/:boardId" component={BoardShowContainer} />
        <Route exact path="/board/new" component={BoardCreateContainer} />
        <Route exact path="/:pinId" component={PinIndexContainer} />
        {/* <Route exact path="/:pinId/edit" component={ProfileEditContainer} /> */}
        {/* <Route path="/" component */}
      </Switch>
    </div>
  </div>
);

export default App;