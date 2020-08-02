import * as PinsAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';

export const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins,
});

export const receivepin = pin => ({
  type: RECEIVE_PIN,
  pin,
});

export const fetchPins = () => dispatch => (
  PinsAPIUtil.fetchPins().then(pins => (
    dispatch(receivePins(pins))
  ))
);

export const createPin = pin => dispatch => (
  PinsAPIUtil.createPin(pin).then(pin => (
    dispatch(receivePin(pin))
  ))
);