import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions'
import CreatePin from'./pin_create'

const msp = (state) => {
  // console.log(state.entities.pins);
  return {
    pins: state.entities.pins,
    currentUserId: state.session.id
  }
}

const mdp = dispatch => ({
  fetchPins: () => dispatch(fetchPins())
})

export default connect(msp, mdp)(CreatePin)