import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
// import navBar from './nav_bar';
// import { openModal } from '../../actions/modal_actions';
import Editprofile from './profile_edit'
import { receiveCurrentUser } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  let userId = ownProps.match.params.userId
  // currentUser: state.session
  return {
    users: state.users,
  }
};

// const mdp = dispatch => ({
//   receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
//   // logout: () => dispatch(logout()),
//   // openModal: modal => dispatch(openModal(modal))
//   // openModal: () => dispatch(openModal())
// })

export default connect(msp)(Editprofile);