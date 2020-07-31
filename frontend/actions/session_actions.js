import * as SessionAPIUtil from '../util/session_api_util';
// import { closeModal} from  './modal_actions'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const resetErrors = () => ({
  type: RESET_SESSION_ERRORS,
});

export const login = formUser => dispatch => {
  return SessionAPIUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
      .fail(errors => (dispatch(receiveErrors(errors.responseJSON))))
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
      .fail(errors => (dispatch(receiveErrors(errors.responseJSON))))
};

export const demoUser = () => dispatch => {
  return SessionAPIUtil.demoUser()
    .then(user => dispatch(receiveCurrentUser(user)))
    // .then(() => dispatch(closeModal()))
};
