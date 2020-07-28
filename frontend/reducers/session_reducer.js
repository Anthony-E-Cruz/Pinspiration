import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'

const _nullSession = {
  currentUser: null
};

const sessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: 
      const currentUser = action.user
      return Object.assign({}, { currentUser });
    case LOGOUT_CURRENT_USER:  
      return oldState;
    default:
      return oldState;
  }
};

export default sessionReducer;