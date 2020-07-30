import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, demoUser, resetErrors } from '../../actions/session_actions';
import signupForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ( state ) => {
  return {
    errors: state.errors.session,
    formType: 'Continue',
    passwordText: 'Create a password',
    // switchPages: "Already a member? Log in",
    navLink: <Link to="/login">log in</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    resetErrors: () => dispatch(resetErrors()),
    // otherForm: (
    //   <button className="switch-pages" onClick={() => dispatch(openModal('login'))}>
    //     Already a member? Log in
    //   </button>
    // ),
    findNew: (
      <p className="modal-find-new">Find new inspiration</p> 
    ),
    otherForm: <Link className="switch-pages" to="/login">Already a member? Log in</Link>,
    // closeModal: () => dispatch(closeModal()),
    demoUser: () => dispatch(demoUser())
  };
};

export default connect(msp, mdp)(signupForm);

