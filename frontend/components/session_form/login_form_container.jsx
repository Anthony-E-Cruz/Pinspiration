import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, demoUser, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ( state ) => {
  return {
    errors: state.errors.session,
    formType: 'Log in',
    // switchPages: "Not on Pinterest yet? Sign up",
    passwordText: 'Password',
    // navLink: <Link to="/signup">sign up!</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors()),
    // otherForm: (
    //   <button className="switch-pages" onClick={() => dispatch(openModal('signup'))}>
    //     Not on Pinspiration yet? Sign up
    //   </button>
    // ),
    otherForm: <Link className="switch-pages" to="/signup">Not on Pinspiration yet? Sign up</Link>,
    // closeModal: () => dispatch(closeModal()),
    demoUser: () => dispatch(demoUser())
  };
};

export default connect(msp, mdp)(SessionForm);