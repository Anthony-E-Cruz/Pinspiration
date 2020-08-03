import { RECEIVE_PINS, RECEIVE_PIN } from '../actions/pin_actions'

const pinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PINS:
      return action.pins;
    case RECEIVE_PIN:
      const newPin = { [action.pin.id]: action.pin };
      return Object.assign({}, oldState, newPin);
    default:
      return oldState;
  };
};

export default pinsReducer;