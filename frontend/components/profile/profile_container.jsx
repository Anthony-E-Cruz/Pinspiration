import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
// import navBar from './nav_bar';
// import { openModal } from '../../actions/modal_actions';
import profile from './profile'

const msp = ( state, ownProps ) => {
  currentUser: state.session
};

const mdp = dispatch => ({
  receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
  // logout: () => dispatch(logout()),
  // openModal: modal => dispatch(openModal(modal))
  // openModal: () => dispatch(openModal())
})

export default connect(msp, mdp)(profile);