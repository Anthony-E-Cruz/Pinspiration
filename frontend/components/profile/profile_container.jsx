import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
// import navBar from './nav_bar';
// import { openModal } from '../../actions/modal_actions';
// import profile from './profile'
import profile from './profile_pins'
import { receiveCurrentUser } from '../../actions/session_actions';
import { fetchUser } from "../../actions/user_actions";
import { fetchPins } from "../../actions/pin_actions";

const msp = ( state, ownProps ) => {
    // currentUser: state.session
  const id = ownProps.match.params.userId;
  // if (state.entities.users[id][id]) {
  // const pins = (state.entities.users[id][id] || [] );
  // } else {
  // const pins = []
  // }
  // const userPins = state.entities.users[id].pins;
  // console.log(ownProps)
  // console.log(pins);
  return {
    // userPins: userPins,
    // pins: pins,
    pins: state.entities.pins,
    currentUserId: state.session.id,
    users: state.entities.users,
    userId: ownProps.match.params.userId
  }
};

const mdp = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchPins: () => dispatch(fetchPins()),
  // receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
  // logout: () => dispatch(logout()),
  // openModal: modal => dispatch(openModal(modal))
  // openModal: () => dispatch(openModal())
})

export default connect(msp, mdp)(profile);