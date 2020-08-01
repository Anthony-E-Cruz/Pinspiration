import { connect } from 'react-redux';
import { update } from '../../actions/session_actions';
// import navBar from './nav_bar';
// import { openModal } from '../../actions/modal_actions';
import Editprofile from './profile_edit'
import { receiveCurrentUser } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  // let userId = ownProps.match.params.userId;
  // const user = state.entities.users[userId];
  // debugger
  return {
    userId: ownProps.match.params.userId,
    user: state.entities.users
  }
};

const mdp = dispatch => ({

  processForm: user => dispatch(update(user)),
  // receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
  // logout: () => dispatch(logout()),
  // openModal: modal => dispatch(openModal(modal))
  // openModal: () => dispatch(openModal())
})

export default connect(msp, mdp)(Editprofile);