import { RECEIVE_CURRENT_USER } from "../actions/session_actions"

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  // let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
    default:
      return oldState;
  }
};

export default usersReducer;

