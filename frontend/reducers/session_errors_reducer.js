import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, RESET_SESSION_ERRORS} from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  // let newState = oldState.slice(0);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      // newState.concat(action.errors);
      return action.errors
    case RECEIVE_CURRENT_USER:
      return [];
    case RESET_SESSION_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;