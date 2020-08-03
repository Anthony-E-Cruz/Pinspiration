import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions'
import CreatePin from'./pin_create'

const msp = (state) => {
  return {
    pins: state.entities.pins,
    currentUserId: state.session.id,
    currentUser: state.entities.users
  }
}

const mdp = dispatch => ({
  fetchPins: () => dispatch(fetchPins())
  // fetchBoards: () => 
})

export default connect(msp, mdp)(CreatePin)