import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions'
import { fetchUser } from "../../actions/user_actions";
import CreatePin from'./pin_create'

const msp = (state) => {
  return {
    pins: state.entities.pins,
    currentUserId: state.session.id,
    currentUser: state.entities.users
  }
}

const mdp = dispatch => ({
  fetchPins: () => dispatch(fetchPins()),
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(msp, mdp)(CreatePin)