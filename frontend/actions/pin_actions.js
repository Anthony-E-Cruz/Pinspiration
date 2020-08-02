import * as SessionAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';

export const receivepins = pins => ({
  type: RECEIVE_PINS,
  pins,
});

export const receivepin = pin => ({
  type: RECEIVE_PIN,
  pin,
});

export const fetchBenches = filters => dispatch => (
  APIUtil.fetchBenches(filters).then(benches => (
    dispatch(receiveBenches(benches))
  ))
);

export const createPin = pin => dispatch => (
  APIUtil.createPin(pin).then(pin => (
    dispatch(receivePin(pin))
  ))
);