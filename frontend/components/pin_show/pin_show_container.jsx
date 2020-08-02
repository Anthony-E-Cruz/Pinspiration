import { connect } from 'react-redux';
import PinShow from './pin_show'
import { fetchPins } from '../../actions/pin_actions'

const msp = (state) => {
  return {
    pins: state.entities.pins
  }
}

