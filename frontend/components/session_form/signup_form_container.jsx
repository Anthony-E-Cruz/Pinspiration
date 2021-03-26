import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, demoUser, resetErrors } from '../../actions/session_actions';
import signupForm from './signup_form';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Continue',
    passwordText: 'Create a password',
    navLink: <Link to="/login">log in</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    resetErrors: () => dispatch(resetErrors()),
    findNew: (
      <p className="modal-find-new">Find new inspiration</p>
    ),
    otherForm: <Link className="switch-pages" to="/login">Already a member? Log in</Link>,
    demoUser: () => dispatch(demoUser())
  };
};

export default connect(msp, mdp)(signupForm);

