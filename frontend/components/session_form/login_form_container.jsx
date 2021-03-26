import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, demoUser, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Log in',
    passwordText: 'Password',
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors()),
    otherForm: <Link className="switch-pages" to="/signup">Not on Pinspiration yet? Sign up</Link>,
    demoUser: () => dispatch(demoUser())
  };
};

export default connect(msp, mdp)(SessionForm);