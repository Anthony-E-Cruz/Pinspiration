import * as PinsAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';

export const receivePins = pins => {
  return{
  type: RECEIVE_PINS,
  pins,
  }
};

export const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin,
});

export const fetchPins = () => dispatch => {
  PinsAPIUtil.fetchPins().then(pins => (
    dispatch(receivePins(pins))
  ))
};

export const fetchPin = (id) => dispatch => {
  PinsAPIUtil.fetchPin(id).then((pin) => dispatch(receivePin(pin)));
};

export const createPin = pin => dispatch => (
  PinsAPIUtil.createPin(pin).then(pin => (
    dispatch(receivePin(pin))
  ))
);